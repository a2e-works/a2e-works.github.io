(function () {
  var D = window.A2E || { articles: [], changelog: [], config: {} };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function articleItem(a) {
    var t = a.url
      ? '<a href="' + esc(a.url) + '" target="_blank" rel="noopener">' + esc(a.title) + '</a>'
      : esc(a.title) + ' <span class="meta">(公開準備中)</span>';
    return '<li><span class="tag">' + esc(a.tag || "記事") + '</span>' + t + '<div class="meta">' + esc(a.date) + '</div></li>';
  }

  var al = document.getElementById("articleList");
  if (al) al.innerHTML = D.articles.map(articleItem).join("");

  var rl = document.getElementById("recentArticles");
  if (rl) rl.innerHTML = D.articles.slice(0, 3).map(articleItem).join("");

  var cl = document.getElementById("changeList");
  if (cl) cl.innerHTML = D.changelog.map(function (c) {
    return '<li><div class="meta">' + esc(c.date) + '</div>' + esc(c.text) + '</li>';
  }).join("");

  var P = D.config.products || {};
  function prod(el, attr) { var k = el.getAttribute(attr); return k ? (P[k] || {}) : null; }
  function off(el, text) { el.removeAttribute("href"); el.removeAttribute("target"); el.classList.add("off"); if (el.classList.contains("btn")) el.textContent = text; }
  document.querySelectorAll("[data-demo]").forEach(function (el) {
    var p = prod(el, "data-demo"), u = p ? p.demo : D.config.demoUrl;
    if (u) el.href = u; else off(el, "デモ版は公開準備中です");
  });
  document.querySelectorAll("[data-dl]").forEach(function (el) {
    var p = prod(el, "data-dl"), u = p && p.download;
    if (u) el.href = u; else off(el, "ダウンロードは準備中です");
  });
  document.querySelectorAll("[data-guide]").forEach(function (el) {
    var p = prod(el, "data-guide"), u = p && p.guide;
    if (u) el.href = u; else { el.removeAttribute("href"); el.removeAttribute("target"); }
  });
  document.querySelectorAll("[data-github]").forEach(function (el) { el.href = D.config.githubUrl || "#"; });
  document.querySelectorAll("[data-buy]").forEach(function (el) {
    var p = prod(el, "data-buy"), u = p ? p.buy : D.config.buyUrl;
    if (u) { el.href = u; el.target = "_blank"; el.rel = "noopener"; }
    else off(el, "販売開始までお待ちください");
  });
  var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
})();
