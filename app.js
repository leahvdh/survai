/* ============================================================
   SurvAI Hub — Application Logic
   Multi-select filters, OR logic, greyed-out unavailable options,
   Silicon Sampling gated to Data Generation task only.
   ============================================================ */

(function () {
  'use strict';

  // ── Filter configuration ─────────────────────────────────────
  // order, labels, and fixed sort for specific filters
  const FILTER_DEFS = [
    { id: 'publication_type',   label: 'Publication Type',    field: 'publication_type',   allLabel: 'All types',          multi: true },
    { id: 'year',               label: 'Year',                field: 'year',               allLabel: 'All years',          multi: true },
    { id: 'domain',             label: 'Domain',              field: 'domain',             allLabel: 'All domains',        multi: true  },
    { id: 'phase',              label: 'Research Phase',               field: 'phase',              allLabel: 'All phases',         multi: true,
      fixedOrder: ['Pre-data collection', 'Data collection', 'Post-data collection'] },
    { id: 'task',               label: 'Task',                field: 'task',               allLabel: 'All tasks',          multi: true  },
    { id: 'llm_family',         label: 'LLM Family',          field: 'llm_family',         allLabel: 'All LLM families',   multi: true  },
    { id: 'interaction_approach', label: 'Interaction Approach',field: 'interaction_approach', allLabel: 'All approaches',     multi: true,
      fixedOrder: ['Zero-shot', 'One-/Few-shot', 'Fine-tuning'] },
    { id: 'language',           label: 'Language',            field: 'language',           allLabel: 'All languages',      multi: true  },
    { id: 'population',         label: 'Population',          field: 'population',         allLabel: 'All populations',    multi: true  },
    { id: 'data_type',          label: 'Data Type',           field: 'data_type',          allLabel: 'All data types',     multi: true,
      fixedOrder: ['Survey', 'Social media', 'Open-ends', 'Reviews', 'Other'] },
    { id: 'silicon_sampling',   label: 'Silicon Sampling',    field: 'silicon_sampling',   allLabel: 'All studies',                multi: true,
      gatedByTask: 'data generation' },
  ];

  // ── State ────────────────────────────────────────────────────
  const filterState = { query: '' };
  FILTER_DEFS.forEach(function (f) {
    filterState[f.id] = f.multi ? new Set() : 'all';
  });

  let searchDebounceTimer = null;

  // ── Helpers ──────────────────────────────────────────────────
  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function unique(arr) {
    return [...new Set(arr)].sort(function (a, b) { return String(a).localeCompare(String(b)); });
  }

  function flatUnique(data, field) {
    return unique(data.flatMap(function (p) { return p[field] || []; }));
  }

  function singleUnique(data, field) {
    return unique(data.filter(function (p) { return p[field]; }).map(function (p) { return String(p[field]); }));
  }

  function applyFixedOrder(values, fixedOrder) {
    if (!fixedOrder) return values;
    const fixed = fixedOrder.filter(function (v) { return values.includes(v); });
    const rest  = values.filter(function (v) { return !fixedOrder.includes(v); });
    return fixed.concat(rest);
  }

  function searchableText(p) {
    return [
      p.citation || '',
      p.title    || '',
      p.abstract || '',
      Array.isArray(p.llm) ? p.llm.join(' ') : (p.llm || ''),
    ].join(' ').toLowerCase();
  }

  function hasActiveFilters() {
    if (filterState.query !== '') return true;
    return FILTER_DEFS.some(function (f) {
      return f.multi ? filterState[f.id].size > 0 : filterState[f.id] !== 'all';
    });
  }

  function getFieldValues(paper, field) {
    const val = paper[field];
    if (val === null || val === undefined) return [];
    return Array.isArray(val) ? val.map(String) : [String(val)];
  }

  // Returns the set of papers that pass all filters EXCEPT the one with filterId.
  // Used to compute which options are still available for that filter.
  function papersExcluding(filterId) {
    let result = PAPERS.slice();
    FILTER_DEFS.forEach(function (f) {
      if (f.id === filterId) return;
      const sel = filterState[f.id];
      if (f.multi) {
        if (sel.size === 0) return;
        result = result.filter(function (p) {
          const vals = getFieldValues(p, f.field);
          return [...sel].some(function (s) { return vals.includes(s); });
        });
      } else {
        if (sel === 'all') return;
        result = result.filter(function (p) {
          const vals = getFieldValues(p, f.field);
          return vals.includes(sel);
        });
      }
    });
    if (filterState.query) {
      const q = filterState.query.toLowerCase().trim();
      result = result.filter(function (p) { return searchableText(p).includes(q); });
    }
    return result;
  }

  // ── Stats ────────────────────────────────────────────────────
  function renderStats() {
    var el = function (id) { return document.getElementById(id); };
    var sp = el('stat-papers'), so = el('stat-publications'),
        sf = el('stat-llm-families'), st = el('stat-tasks');
    if (sp) sp.textContent = PAPERS.length;
    if (so) so.textContent = singleUnique(PAPERS, 'publication_type').length;
    if (sf) sf.textContent = flatUnique(PAPERS, 'llm_family').length;
    if (st) st.textContent = flatUnique(PAPERS, 'task').length;
  }

  // ── Build filter UI ──────────────────────────────────────────
  function buildFilters() {
    const container = document.getElementById('filter-rows');
    if (!container) return;

    FILTER_DEFS.forEach(function (def) {
      let allValues = def.multi
        ? flatUnique(PAPERS, def.field)
        : singleUnique(PAPERS, def.field);

      allValues = applyFixedOrder(allValues, def.fixedOrder);
      if (allValues.length === 0) return;

      const group = document.createElement('div');
      group.className = 'filter-group';
      group.setAttribute('data-filter-id', def.id);

      const lbl = document.createElement('label');
      lbl.textContent = def.label;
      lbl.htmlFor = 'filter-btn-' + def.id;
      group.appendChild(lbl);

      const inner = document.createElement('div');
      inner.className = 'filter-group-inner';

      if (def.multi) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'filter-btn';
        btn.id = 'filter-btn-' + def.id;
        btn.setAttribute('aria-haspopup', 'listbox');
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML =
          '<span class="filter-btn-text" id="filter-btn-text-' + def.id + '">' + esc(def.allLabel) + '</span>' +
          '<span class="filter-btn-chevron" aria-hidden="true">&#9660;</span>';

        const dropdown = document.createElement('div');
        dropdown.className = 'filter-dropdown';
        dropdown.id = 'filter-dropdown-' + def.id;

        const dropInner = document.createElement('div');
        dropInner.className = 'filter-dropdown-inner';

        allValues.forEach(function (val) {
          const optEl = document.createElement('label');
          optEl.className = 'filter-option';
          optEl.setAttribute('data-value', val);

          const cb = document.createElement('input');
          cb.type = 'checkbox';
          cb.value = val;
          cb.addEventListener('change', function () {
            if (cb.checked) filterState[def.id].add(val);
            else filterState[def.id].delete(val);
            updateFilterBtnLabel(def);
            applyFilters();
            updateAllDropdownAvailability();
          });

          const span = document.createElement('span');
          span.textContent = val;
          optEl.appendChild(cb);
          optEl.appendChild(span);
          dropInner.appendChild(optEl);
        });

        dropdown.appendChild(dropInner);

        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          toggleDropdown(def.id, btn, dropdown);
        });

        inner.appendChild(btn);
        inner.appendChild(dropdown);

      } else {
        // native <select> for single-value filters
        const select = document.createElement('select');
        select.id = 'filter-btn-' + def.id;
        select.className = 'filter-btn';

        const allOpt = document.createElement('option');
        allOpt.value = 'all';
        allOpt.textContent = def.allLabel;
        select.appendChild(allOpt);

        allValues.forEach(function (val) {
          const opt = document.createElement('option');
          opt.value = val;
          opt.textContent = val;
          select.appendChild(opt);
        });

        select.addEventListener('change', function () {
          filterState[def.id] = select.value;
          applyFilters();
          updateAllDropdownAvailability();
          updateSiliconSamplingVisibility();
        });

        inner.appendChild(select);
      }

      group.appendChild(inner);
      container.appendChild(group);
    });

    // Initial visibility for silicon sampling
    updateSiliconSamplingVisibility();
  }

  function updateFilterBtnLabel(def) {
    const textEl = document.getElementById('filter-btn-text-' + def.id);
    if (!textEl) return;
    const sel = filterState[def.id];
    if (sel.size === 0) {
      textEl.textContent = def.allLabel;
      textEl.classList.remove('has-selection');
    } else if (sel.size === 1) {
      textEl.textContent = [...sel][0];
      textEl.classList.add('has-selection');
    } else {
      textEl.textContent = sel.size + ' selected';
      textEl.classList.add('has-selection');
    }
  }

  // Grey out options that have no matching papers given current filters
  function updateAllDropdownAvailability() {
    FILTER_DEFS.forEach(function (def) {
      if (!def.multi) return;
      const dropdown = document.getElementById('filter-dropdown-' + def.id);
      if (!dropdown) return;

      const available = papersExcluding(def.id);
      const availableVals = new Set(flatUnique(available, def.field));

      dropdown.querySelectorAll('.filter-option').forEach(function (optEl) {
        const val = optEl.getAttribute('data-value');
        const cb  = optEl.querySelector('input[type="checkbox"]');
        // Never grey out already-checked options
        if (cb && cb.checked) {
          optEl.classList.remove('disabled');
        } else {
          optEl.classList.toggle('disabled', !availableVals.has(val));
        }
      });
    });
  }

  // Silicon sampling filter only relevant for "data generation" task
  function updateSiliconSamplingVisibility() {
    const taskDef = FILTER_DEFS.find(function (f) { return f.id === 'task'; });
    const silDef  = FILTER_DEFS.find(function (f) { return f.id === 'silicon_sampling'; });
    if (!taskDef || !silDef) return;

    const taskSelection = filterState['task']; // Set
    const silGroup = document.querySelector('[data-filter-id="silicon_sampling"]');
    if (!silGroup) return;

    // Show if no task filter active OR "data generation" is among selected tasks
    const showSilicon = taskSelection.size === 0 ||
      [...taskSelection].some(function (t) {
        return t.toLowerCase().includes('data generation');
      });

    silGroup.style.opacity  = showSilicon ? '1' : '0.35';
    silGroup.style.pointerEvents = showSilicon ? '' : 'none';

    // Reset silicon filter if hidden
    if (!showSilicon) {
      filterState['silicon_sampling'] = 'all';
      const sel = document.getElementById('filter-btn-silicon_sampling');
      if (sel) sel.value = 'all';
    }
  }

  // ── Dropdown open/close ──────────────────────────────────────
  function toggleDropdown(id, btn, dropdown) {
    const isOpen = dropdown.classList.contains('open');
    closeAllDropdowns();
    if (!isOpen) {
      dropdown.classList.add('open');
      btn.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  }

  function closeAllDropdowns() {
    document.querySelectorAll('.filter-dropdown.open').forEach(function (d) { d.classList.remove('open'); });
    document.querySelectorAll('.filter-btn.open').forEach(function (b) {
      b.classList.remove('open');
      b.setAttribute('aria-expanded', 'false');
    });
  }

  // ── Filter + Apply ───────────────────────────────────────────
  function applyFilters() {
    let filtered = PAPERS.slice();

    FILTER_DEFS.forEach(function (def) {
      const sel = filterState[def.id];
      if (def.multi) {
        if (sel.size === 0) return;
        filtered = filtered.filter(function (p) {
          const vals = getFieldValues(p, def.field);
          return [...sel].some(function (s) { return vals.includes(s); });
        });
      } else {
        if (sel === 'all') return;
        filtered = filtered.filter(function (p) {
          const vals = getFieldValues(p, def.field);
          return vals.includes(sel);
        });
      }
    });

    if (filterState.query) {
      const q = filterState.query.toLowerCase().trim();
      filtered = filtered.filter(function (p) { return searchableText(p).includes(q); });
    }

    renderCards(filtered);
    updateResultCount(filtered.length, PAPERS.length);
    updateClearButton();
  }

  function updateResultCount(shown, total) {
    const el = document.getElementById('result-count');
    if (!el) return;
    el.textContent = hasActiveFilters()
      ? 'Showing ' + shown + ' of ' + total + ' paper' + (total !== 1 ? 's' : '')
      : total + ' paper' + (total !== 1 ? 's' : '');
  }

  function updateClearButton() {
    const btn = document.getElementById('clear-filters');
    if (btn) btn.hidden = !hasActiveFilters();
  }

  // ── Card rendering ───────────────────────────────────────────
  function buildPublicationBadge(p) {
    if (!p.publication_type) return '';
    const type = p.publication_type.toLowerCase();
    let cls = 'badge-publication';
    if (type.includes('preprint')) cls += ' preprint';
    else if (type.includes('conference')) cls += ' conference';
    return '<span class="' + cls + '">' + esc(p.publication_type) + '</span>';
  }

  function buildTags(p) {
    const tags = [];
    (p.phase             || []).forEach(function (v) { tags.push('<span class="tag tag-phase">'      + esc(v) + '</span>'); });
    (p.task              || []).forEach(function (v) { tags.push('<span class="tag tag-task">'       + esc(v) + '</span>'); });
    (p.llm_family        || []).forEach(function (v) { tags.push('<span class="tag tag-llm">'        + esc(v) + '</span>'); });
    (p.interaction_approach|| []).forEach(function (v) { tags.push('<span class="tag tag-approach">'   + esc(v) + '</span>'); });
    (p.language          || []).forEach(function (v) { tags.push('<span class="tag tag-lang">'       + esc(v) + '</span>'); });
    (p.population        || []).forEach(function (v) { tags.push('<span class="tag tag-population">' + esc(v) + '</span>'); });
    (p.data_type         || []).forEach(function (v) { tags.push('<span class="tag tag-datatype">'   + esc(v) + '</span>'); });
    return tags.join('');
  }

  function buildDetailGrid(p) {
    const rows = [];
    function row(label, value) {
      if (!value && value !== 0) return;
      rows.push(
        '<div class="detail-row">' +
          '<span class="detail-label">' + esc(label) + '</span>' +
          '<span class="detail-value">' + value + '</span>' +
        '</div>'
      );
    }
    // Only LLM, domain in details
    row('LLM(s) used', Array.isArray(p.llm) ? p.llm.map(esc).join(', ') : esc(p.llm || ''));
    row('Domain', Array.isArray(p.domain) ? p.domain.map(esc).join(', ') : esc(p.domain || ''));
    return '<div class="detail-grid">' + rows.join('') + '</div>';
  }

  function buildCardHTML(p) {
    const hasAbstract = p.abstract && p.abstract.trim();
    const hasCitation = p.citation && p.citation.trim();
    const silBadge = p.silicon_sampling && p.silicon_sampling.toLowerCase().includes('yes')
      ? '<span class="badge-silicon">Silicon Sampling</span>'
      : '';

    return (
      '<article class="paper-card" id="' + esc(p.id) + '">' +
        '<div class="card-head">' +
          '<div class="card-meta-row">' +
            buildPublicationBadge(p) +
            (p.year ? '<span class="card-year">' + esc(p.year) + '</span>' : '') +
            silBadge +
          '</div>' +
          '<h3 class="card-name">' +
            (p.doi
              ? '<a href="' + esc(p.doi) + '" target="_blank" rel="noopener">' + esc(p.title || p.id) + '</a>'
              : esc(p.title || p.id)) +
          '</h3>' +
          '<div class="card-tags">' + buildTags(p) + '</div>' +
        '</div>' +

        '<div class="card-toggle-bar">' +
          '<button class="btn-toggle" data-card-id="' + esc(p.id) + '" aria-expanded="false">' +
            '<span class="toggle-label">Show Details</span>' +
            '<span class="toggle-chevron" aria-hidden="true">&#9660;</span>' +
          '</button>' +
        '</div>' +

        '<div class="card-detail" id="detail-' + esc(p.id) + '">' +
          '<div class="card-detail-inner">' +

            (hasAbstract
              ? '<div class="detail-section"><h4>Abstract</h4><p class="abstract-text">' + esc(p.abstract) + '</p></div>'
              : '') +

            '<div class="detail-section"><h4>Details</h4>' + buildDetailGrid(p) + '</div>' +

            (hasCitation
              ? '<div class="detail-section"><h4>Citation</h4>' +
                  '<div class="citation-block">' +
                    '<div class="citation-text" id="cite-' + esc(p.id) + '">' + esc(p.citation) + '</div>' +
                    '<div class="citation-actions">' +
                      '<button class="btn-copy" data-cite-id="cite-' + esc(p.id) + '">Copy</button>' +
                    '</div>' +
                  '</div>' +
                '</div>'
              : '') +

            (p.doi
              ? '<div class="detail-section"><h4>Links</h4>' +
                  '<a class="btn-link" href="' + esc(p.doi) + '" target="_blank" rel="noopener">&#128279; DOI &#8599;</a>' +
                '</div>'
              : '') +

          '</div>' +
        '</div>' +
      '</article>'
    );
  }

  function renderCards(papers) {
    const catalog = document.getElementById('catalog');
    if (!catalog) return;
    if (papers.length === 0) {
      catalog.innerHTML =
        '<div class="catalog-empty"><strong>No papers match your filters.</strong>' +
        ' Try clearing some filters or broadening your search.</div>';
      return;
    }
    catalog.innerHTML = papers.map(buildCardHTML).join('');
    checkHash();
  }

  // ── Event delegation ─────────────────────────────────────────
  function attachCatalogDelegation() {
    const catalog = document.getElementById('catalog');
    if (!catalog) return;
    catalog.addEventListener('click', function (e) {
      const toggleBtn = e.target.closest('.btn-toggle');
      if (toggleBtn) {
        const cardId = toggleBtn.dataset.cardId;
        const card = document.getElementById(cardId);
        if (card) {
          const expanded = card.classList.toggle('expanded');
          toggleBtn.setAttribute('aria-expanded', expanded);
          const lbl = toggleBtn.querySelector('.toggle-label');
          if (lbl) lbl.textContent = expanded ? 'Hide Details' : 'Show Details';
          if (expanded && history.replaceState) history.replaceState(null, '', '#' + cardId);
        }
        return;
      }
      const copyBtn = e.target.closest('.btn-copy');
      if (copyBtn) {
        const target = document.getElementById(copyBtn.dataset.citeId);
        if (!target) return;
        copyToClipboard(target.textContent, function () {
          const orig = copyBtn.textContent;
          copyBtn.textContent = 'Copied!';
          copyBtn.classList.add('copied');
          setTimeout(function () { copyBtn.textContent = orig; copyBtn.classList.remove('copied'); }, 2000);
        });
      }
    });
  }

  function copyToClipboard(text, onSuccess) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(onSuccess).catch(function () { fallbackCopy(text, onSuccess); });
    } else { fallbackCopy(text, onSuccess); }
  }

  function fallbackCopy(text, onSuccess) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;top:-999px;left:-999px;opacity:0';
    document.body.appendChild(ta);
    ta.focus(); ta.select();
    try { document.execCommand('copy'); if (onSuccess) onSuccess(); } catch (_) {}
    document.body.removeChild(ta);
  }

  function checkHash() {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const card = document.getElementById(hash);
    if (!card || !card.classList.contains('paper-card')) return;
    card.classList.add('expanded');
    const btn = card.querySelector('.btn-toggle');
    if (btn) { btn.setAttribute('aria-expanded', 'true'); const l = btn.querySelector('.toggle-label'); if (l) l.textContent = 'Hide Details'; }
    setTimeout(function () { card.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
  }

  // ── Event listeners ──────────────────────────────────────────
  function attachEventListeners() {
    const searchEl = document.getElementById('search-input');
    if (searchEl) {
      searchEl.addEventListener('input', function () {
        clearTimeout(searchDebounceTimer);
        searchDebounceTimer = setTimeout(function () {
          filterState.query = searchEl.value.trim();
          applyFilters();
          updateAllDropdownAvailability();
        }, 150);
      });
    }

    const clearBtn = document.getElementById('clear-filters');
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        filterState.query = '';
        if (searchEl) searchEl.value = '';
        FILTER_DEFS.forEach(function (def) {
          if (def.multi) {
            filterState[def.id].clear();
            const dropdown = document.getElementById('filter-dropdown-' + def.id);
            if (dropdown) dropdown.querySelectorAll('input[type="checkbox"]').forEach(function (cb) { cb.checked = false; });
            updateFilterBtnLabel(def);
          } else {
            filterState[def.id] = 'all';
            const sel = document.getElementById('filter-btn-' + def.id);
            if (sel) sel.value = 'all';
          }
        });
        applyFilters();
        updateAllDropdownAvailability();
        updateSiliconSamplingVisibility();
      });
    }

    document.addEventListener('click', closeAllDropdowns);
    document.querySelectorAll('.filter-dropdown').forEach(function (d) {
      d.addEventListener('click', function (e) { e.stopPropagation(); });
    });

    window.addEventListener('hashchange', checkHash);
  }

  // ── Init ─────────────────────────────────────────────────────
  function init() {
    if (typeof PAPERS === 'undefined' || !Array.isArray(PAPERS)) {
      const catalog = document.getElementById('catalog');
      if (catalog) catalog.innerHTML = '<div class="catalog-empty"><strong>Could not load data.</strong> Please check that <code>survai_db.js</code> is present.</div>';
      return;
    }
    const loading = document.getElementById('catalog-loading');
    if (loading) loading.remove();
    renderStats();
    buildFilters();
    attachCatalogDelegation();
    attachEventListeners();
    applyFilters();
    updateAllDropdownAvailability();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

}());