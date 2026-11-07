/* ===== 更新はこのファイルだけ =====
   記事を足す: articles の先頭に1件追加
   更新履歴を足す: changelog の先頭に1件追加
   url が空("")の記事は「公開準備中」と表示されます。noteに投稿したらURLを入れてください。 */
window.A2E = {
  config: {
    demoUrl: "https://a2e-works.github.io/dencho_DIY/",
    githubUrl: "https://github.com/a2e-works",
    buyUrl: ""   // ココナラ等の販売ページURL。空の間は「販売開始までお待ちください」と表示
  },
  articles: [
    { date: "2026-11-07", title: "電子取引データって何?「最低限やること」を3つに絞って整理", url: "", tag: "入門" },
    { date: "2026-11-07", title: "領収書PDFのファイル名、どう付ける?「日付_取引先_金額_種類」ルール", url: "", tag: "ファイル名" },
    { date: "2026-11-07", title: "Amazon・楽天の領収書、どう保存する?", url: "", tag: "ネット通販" },
    { date: "2026-11-07", title: "税務調査で「書類を見せてください」と言われたら?備え方", url: "", tag: "備え" }
  ],
  changelog: [
    { date: "2026-11-07", text: "公式サイト v1.0 を作成しました。" },
    { date: "2026-11-05", text: "電帳DIYに「取得予定のお知らせ」(毎月の書類取得日を通知する機能)を追加しました(デモ版は通知のみ)。" }
  ]
};
