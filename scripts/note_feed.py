# noteのRSSを読み、記事一覧を js/note-feed.js に書き出す（GitHub Actions から定期実行）
import json, sys, urllib.request, xml.etree.ElementTree as ET
from email.utils import parsedate_to_datetime
from datetime import timezone, timedelta

RSS = "https://note.com/a2e_works/rss"
OUT = "js/note-feed.js"
JST = timezone(timedelta(hours=9))
MEDIA = "{http://search.yahoo.com/mrss/}"

req = urllib.request.Request(RSS, headers={"User-Agent": "a2e-works-site-feed/1.0"})
with urllib.request.urlopen(req, timeout=30) as r:
    root = ET.fromstring(r.read())

items = []
for it in root.iter("item"):
    title = (it.findtext("title") or "").strip()
    url = (it.findtext("link") or "").strip()
    pub = it.findtext("pubDate")
    if not title or not url:
        continue
    date = parsedate_to_datetime(pub).astimezone(JST).strftime("%Y-%m-%d") if pub else ""
    th = it.find(MEDIA + "thumbnail")
    items.append({"title": title, "url": url, "date": date, "thumb": (th.text or "").strip() if th is not None else ""})

if not items:
    print("no items; keep the current file")
    sys.exit(0)

body = "/* 自動生成（scripts/note_feed.py）。手で書き換えないでください */\nwindow.A2E_NOTE = " + json.dumps({"items": items}, ensure_ascii=False, indent=1) + ";\n"
try:
    old = open(OUT, encoding="utf-8").read()
except FileNotFoundError:
    old = ""
if old != body:
    open(OUT, "w", encoding="utf-8").write(body)
    print("updated", len(items))
else:
    print("no change")
