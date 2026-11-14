/* ===== 更新はこのファイルだけ =====
   記事を足す: articles の先頭に1件追加
   更新履歴を足す: changelog の先頭に1件追加
   資格挑戦記の記事は tag を "資格挑戦記" にしてください。
   url が空("")の記事は「公開準備中」と表示されます。noteに投稿したらURLを入れてください。 */
window.A2E = {
  config: {
    demoUrl: "https://a2e-works.github.io/dencho_DIY/",
    githubUrl: "https://github.com/a2e-works",
    buyUrl: "",   // ココナラ等の販売ページURL。空の間は「販売開始までお待ちください」と表示
    // 製品ごとの設定(data-demo="idosouji" などで使います。空("")の間はボタンが「準備中」になります)
    products: {
      idosouji: {
        demo: "https://a2e-works.github.io/id-osouji/",                      // デモ版(公開リポジトリ a2e-works/id-osouji の GitHub Pages)
        download: "https://github.com/a2e-works/id-osouji/releases/latest",  // デモ版のzip(GitHub の Releases)
        guide: "https://a2e-works.github.io/id-osouji/docs/mail-guide.html",  // メールの読み込み手順
        buy: ""                                                              // Vector などの販売ページURL
      }
    }
  },
  articles: [
    { date: "2026-11-14", title: "メールから忘れていたIDを見つけて片づける「IDおそうじ」を公開しました", url: "", tag: "IDおそうじ" },
    { date: "2026-11-07", title: "電子取引データって何?「最低限やること」を3つに絞って整理", url: "", tag: "入門" },
    { date: "2026-11-07", title: "領収書PDFのファイル名、どう付ける?「日付_取引先_金額_種類」ルール", url: "", tag: "ファイル名" },
    { date: "2026-11-07", title: "Amazon・楽天の領収書、どう保存する?", url: "", tag: "ネット通販" },
    { date: "2026-11-07", title: "税務調査で「書類を見せてください」と言われたら?備え方", url: "", tag: "備え" }
  ],
  changelog: [
    { date: "2026-11-14", text: "IDおそうじのページを公開しました(マンガ・動画・無料デモ)。" },
    { date: "2026-11-07", text: "公式サイト v1.0 を作成しました。" },
    { date: "2026-11-05", text: "電帳DIYに「取得予定のお知らせ」(毎月の書類取得日を通知する機能)を追加しました(デモ版は通知のみ)。" }
  ]
};
