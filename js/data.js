/* ===== 更新はこのファイルだけ =====
   記事を足す: articles の先頭に1件追加
   更新履歴を足す: changelog の先頭に1件追加（ツールや製品のお知らせだけ。サイト自体の細かい直しは書かず、版数を上げるだけにする）
   サイトの版数を上げる: config.siteVersion を書き換え
   資格挑戦記の記事は tag を "資格挑戦記" にしてください。
   url が空("")の記事は「公開準備中」と表示されます。noteに投稿したらURLを入れてください。
   hidden: true を付けた記事は一覧に出しません（まだ見せたくない下書き）。出すときは hidden を消し、date を公開日に直してください。 */
window.A2E = {
  config: {
    siteVersion: "1.10",  // サイトの版数。ヘッダーに「v○○」と表示されます。サイトを変えて反映するたびに 0.01 ずつ上げてください（1.08→1.09→1.10…、大きな作り直しは 2.00）
    demoUrl: "",
    githubUrl: "https://github.com/a2e-works",
    buyUrl: "",   // ココナラ等の販売ページURL。空の間は「販売開始までお待ちください」と表示
    // 製品ごとの設定(data-demo="idosouji" などで使います。空("")の間はボタンが「準備中」になります)
    products: {
      idosouji: {
        demo: "",   // デモ版。公開したら "https://a2e-works.github.io/id-osouji/" に戻す(a2e-works/id-osouji の GitHub Pages)
        download: "",  // デモ版のzip。GitHub の Releases を作ったら "https://github.com/a2e-works/id-osouji/releases/latest" を入れる
        guide: "docs/id-osouji-mail-guide.html",  // メールの読み込み手順（id-osouji リポジトリを非公開にしたので、公式サイトの中に置いた）
        buy: ""                                                              // Vector などの販売ページURL
      }
    }
  },
  articles: [
    { date: "2026-11-14", title: "メールから忘れていたIDを見つけて片づける「IDおそうじ」を公開しました", url: "", tag: "IDおそうじ", hidden: true },
    { date: "2026-11-07", title: "電子取引データって何?「最低限やること」を3つに絞って整理", url: "", tag: "入門", hidden: true },
    { date: "2026-11-07", title: "領収書PDFのファイル名、どう付ける?「日付_取引先_金額_種類」ルール", url: "", tag: "ファイル名", hidden: true },
    { date: "2026-11-07", title: "Amazon・楽天の領収書、どう保存する?", url: "", tag: "ネット通販", hidden: true },
    { date: "2026-11-07", title: "税務調査で「書類を見せてください」と言われたら?備え方", url: "", tag: "備え", hidden: true }
  ],
  changelog: [
    { date: "2026-11-21", text: "メール公式チェッカー v0.8.1を公開しました。危ない添付ファイル（Webページ形式、マクロ付き文書、パスワード付きzip、書類に見せかけた名前など）の注意、自分あてメールの見分け、Gmailなどのアドレス単位の信頼済み登録に対応。開いた直後の判定も安定しました。" },
    { date: "2026-11-20", text: "IDおそうじのGmail版（Googleにログインして直接読み込む版）を準備中にしました。GmailはThunderbirdで受け取ってから読み込めます。" },
    { date: "2026-11-20", text: "メール公式チェッカー（Gmail用Chrome拡張機能）v0.7.1を無料で公開しました。本文のリンクをロックする機能を追加。Edgeでも使えます。" },
    { date: "2026-11-14", text: "IDおそうじのページを公開しました(マンガ・動画・無料デモ)。" },
    { date: "2026-11-07", text: "公式サイトを公開しました。" },
    { date: "2026-11-05", text: "電帳DIYに「取得予定のお知らせ」(毎月の書類取得日を通知する機能)を追加しました。" }
  ]
};
