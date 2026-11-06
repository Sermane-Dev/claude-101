/* Affichage des pages à partir de data.js — pas besoin de modifier ce fichier */
(function () {
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const icons = { video: "▶", lecture: "▤", exercise: "☰" };

  const stats = (lessons) => {
    const done = lessons.filter((l) => l.done).length;
    const fiches = new Set(lessons.filter((l) => l.fiche).map((l) => l.fiche)).size;
    return { done, total: lessons.length, pct: Math.round((done / lessons.length) * 100), fiches };
  };

  const bar = (pct) => `<div class="bar"><span style="width:${pct}%"></span></div>`;

  /* ---------- Page d'accueil ---------- */
  function renderHome() {
    const all = COURSE.modules.flatMap((m) => m.lessons);
    const s = stats(all);
    $("#global").innerHTML = `
      <div class="stat"><b>${s.pct}%</b><span>du cours terminé</span></div>
      <div class="stat"><b>${s.done}/${s.total}</b><span>leçons</span></div>
      <div class="stat"><b>${new Set(all.filter(l=>l.fiche).map(l=>l.fiche)).size}</b><span>fiche(s) de révision</span></div>
      <div class="stat wide">${bar(s.pct)}</div>`;

    $("#modules").innerHTML = COURSE.modules.map((m) => {
      const st = stats(m.lessons);
      return `
      <a class="module" href="module-${m.id}.html">
        <div class="module-top">
          <span class="badge">Module ${m.id}</span>
          <span class="pct">${st.pct}%</span>
        </div>
        <h3>${esc(m.titleFr)}</h3>
        <p class="en">${esc(m.title)}</p>
        <p>${esc(m.summary)}</p>
        <div class="tags">${m.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        ${bar(st.pct)}
        <div class="module-foot">${st.done}/${st.total} leçons · ${st.fiches} fiche(s) <span class="go">Ouvrir →</span></div>
      </a>`;
    }).join("");
  }

  /* ---------- Page module ---------- */
  function renderModule(id) {
    const m = COURSE.modules.find((x) => x.id === id);
    const st = stats(m.lessons);
    document.title = `Module ${m.id} · ${m.titleFr} — Claude 101`;
    $("#crumb-module").textContent = `Module ${m.id}`;
    $("#m-badge").textContent = `Module ${m.id} / ${COURSE.modules.length}`;
    $("#m-title").textContent = m.titleFr;
    $("#m-en").textContent = m.title;
    $("#m-summary").textContent = m.summary;
    $("#m-tags").innerHTML = m.tags.map((t) => `<span>${esc(t)}</span>`).join("");
    $("#m-progress").innerHTML = `${bar(st.pct)}<small>${st.done}/${st.total} leçons terminées · ${st.fiches} fiche(s)</small>`;

    $("#lessons").innerHTML = m.lessons.map((l, i) => {
      const status = l.fiche
        ? `<a class="pill ok" href="${esc(l.fiche)}">📇 Voir la fiche</a>`
        : l.done ? `<span class="pill wip">Fiche à faire</span>` : `<span class="pill todo">À venir</span>`;
      return `
      <li class="lesson ${l.done ? "is-done" : ""}">
        <span class="step">${l.done ? "✓" : i + 1}</span>
        <span class="ico" title="${l.type}">${icons[l.type] || "▤"}</span>
        <span class="lt">${esc(l.title)}</span>
        ${status}
      </li>`;
    }).join("");

    const prev = COURSE.modules.find((x) => x.id === id - 1);
    const next = COURSE.modules.find((x) => x.id === id + 1);
    $("#pager").innerHTML =
      (prev ? `<a href="module-${prev.id}.html">← Module ${prev.id} · ${esc(prev.titleFr)}</a>` : `<span></span>`) +
      (next ? `<a href="module-${next.id}.html">Module ${next.id} · ${esc(next.titleFr)} →</a>` : `<span></span>`);
  }

  const page = document.body.dataset.page;
  if (page === "home") renderHome();
  if (page === "module") renderModule(Number(document.body.dataset.module));
})();
