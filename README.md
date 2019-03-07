## pollenjp.github.io

- https://pollenjp.github.io/
- 編集用HackMD (https://hackmd.io/QuFQTdy6RHS1BTmmidkw9g) (アクセス制限あり)

## HackMDから変換
1. HTMLでexportする
1. ローカルでexportしたHTMLを開く(オンライン環境下)
1. `Ctrl+s`でそのサイトを完全な形で保存
1. index.htmlファイル内でHackMDからexportした際に保存したPC内のパスで置き換えられている個所があるのでそれを一括置換
    1. 例えば Ubuntu環境下で `/home/pollenjp/Desktop` に保存していたとすればvimを開いてコマンド `:%s/file\:\/\/\/home\/pollenjp\/Desktop/\./g` によって一括置換されるはずである.
