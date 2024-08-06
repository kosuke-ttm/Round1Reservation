# Round1Reservation

### 作成目的
アルバイトで働いている職場に貢献するため

### 概要
ラウンドワンのアイテムの一つであるバランススクータとセグウェイドリフトの貸し出しと返却をパソコン上でやっていたのだが、予約ををするのは紙媒体でされていた。このやり方は業務をする上で非効率だと思ったので今回本来あるシステムを改造して予約もできるように作成する

### 開発環境
エクセルのマクロ機能とVBAによるプログラミングで構成されている

### 使用方法
Codeをおしてzip形式でダウンロードしてローカル上で解凍してください．
Windowsの場合はファイルを開く前に右クリックでプロパティからマクロを有効にするにチェックして完了する．その後にファイルを開くようにしてください．
Macの場合はファイルを開いてマクロを有効にするのボタンを押してください．

### こだわりポイント

### 今後について
職場のスタッフの声を聞きながら改善していく
実際に声ボタンの配置を変えたりした

## 課題
これを動かすパソコンの機種が古く、処理速度が遅いため予約などをする時にバグが起きる。例えば関係のないセルに100桁くらいの数字がなぜか格納されていることが見受けれらた。セルを指定して計算させるプログラムのコードを書いてるためその処理が追いつけずこのような現象が起きたのだと考えられる。これを解決するために動かす環境を変える必要がある。だが、パソコンを変えるのはコストがかかる。そこでWeb上で同じようなことがないか検討している。
