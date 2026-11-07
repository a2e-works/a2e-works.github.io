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

  document.querySelectorAll("[data-demo]").forEach(function (el) { el.href = D.config.demoUrl || "#"; });
  document.querySelectorAll("[data-github]").forEach(function (el) { el.href = D.config.githubUrl || "#"; });
  document.querySelectorAll("[data-buy]").forEach(function (el) {
    if (D.config.buyUrl) { el.href = D.config.buyUrl; el.target = "_blank"; el.rel = "noopener"; }
    else { el.removeAttribute("href"); el.classList.add("off"); el.textContent = "販売開始までお待ちください"; }
  });
  var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
})();
