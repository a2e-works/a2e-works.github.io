(function () {
  var D = window.A2E || { articles: [], changelog: [], config: {} };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function articleItem(a) {
    var t = a.url
      ? '<a href="' + esc(a.url) + '" target="_blank" rel="noopener">' + esc(a.title) + '</a>'
      : esc(a.title) + ' <span class="meta">(公開準備中)</span>';
    return '<li><span class="tag">' + esc(a.tag || "記事") + '</span>' + t + '<div class="meta">' + esc(a.date) + '</div></li>';
  }

  // noteの記事（js/note-feed.js、GitHub Actions が3時間ごとに自動更新）を先頭に、
  // data.js の articles のうちまだ公開していないもの（url が空）を後ろに並べる
  var N = (window.A2E_NOTE && window.A2E_NOTE.items) || [];
  if (N.length) {
    var seen = {};
    N.forEach(function (n) { seen[n.title] = 1; });
    D.articles = N.map(function (n) { return { date: n.date, title: n.title, url: n.url, tag: "note" }; })
      .concat((D.articles || []).filter(function (a) { return !a.url && !seen[a.title]; }));
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
  function off(el, text) { el.removeAttribute("href"); el.removeAttribute("target"); el.classList.add("off"); if (el.classList.contains("btn")) el.textContent = text; else if (el.textContent.indexOf("準備中") < 0) el.textContent += "(準備中)"; }
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

  // ヘッダーにサイトの版数を表示（js/data.js の config.siteVersion）。押すと更新履歴へ
  var ver = D.config && D.config.siteVersion;
  var brand = document.querySelector("header.site .brand");
  if (ver && brand && !document.querySelector(".updated")) {
    var dates = (D.changelog || []).map(function (c) { return c.date; }).filter(Boolean).sort();
    var box = document.createElement("div"); box.className = "brandbox";
    brand.parentNode.insertBefore(box, brand); box.appendChild(brand);
    var u = document.createElement("a"); u.className = "updated";
    u.href = brand.getAttribute("href").replace(/index\.html$/, "changelog.html");
    u.textContent = "v" + ver;
    if (dates.length) u.title = "最終更新 " + dates[dates.length - 1] + "（更新履歴を見る）";
    box.appendChild(u);
  }

  // 「A2E Worksについて」の枠の右下に最終更新の日時を表示。
  // GitHub Pages が返す更新時刻（最後にプッシュした時刻）を使う。取れないときは更新履歴・記事のいちばん新しい日付。
  var lu = document.querySelectorAll(".last-upd");
  if (lu.length) {
    var pad = function (n) { return (n < 10 ? "0" : "") + n; };
    var show = function (s) { lu.forEach(function (el) { el.textContent = "最終更新 " + s; }); };
    var fallback = function () {
      var ds = (D.changelog || []).concat(D.articles || []).map(function (c) { return c.date; }).filter(Boolean).sort();
      if (ds.length) { var p = ds[ds.length - 1].split("-"); show(p[0] + "年" + Number(p[1]) + "月" + Number(p[2]) + "日"); }
    };
    var src = (document.querySelector('script[src$="js/data.js"]') || {}).src;
    if (src && window.fetch && location.protocol.indexOf("http") === 0) {
      fetch(src, { method: "HEAD", cache: "no-cache" }).then(function (r) {
        var h = r.headers.get("last-modified"); var d = h ? new Date(h) : null;
        if (!d || isNaN(d)) return fallback();
        // 日本時間で表示
        var j = new Date(d.getTime() + (d.getTimezoneOffset() + 540) * 60000);
        show(j.getFullYear() + "年" + (j.getMonth() + 1) + "月" + j.getDate() + "日 " + pad(j.getHours()) + ":" + pad(j.getMinutes()));
      }).catch(fallback);
    } else fallback();
  }
})();
