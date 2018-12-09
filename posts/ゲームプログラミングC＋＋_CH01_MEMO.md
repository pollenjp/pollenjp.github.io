自分のメモ書きで本に書いていないおれおれ知識もたまに出てくる。

## 目次

## 開発環境
　この本で扱う開発環境は以下の２つのみのようである。
 
- MS Windows
- Apple macOS

あれ (^ ^;)<br>
Linuxさんは？<br>
僕はLinux (Ubuntu) でやろうっと。


- ソースコード
  - https://github.com/gameprogcpp/code
    - やはりWindowsとmacOS用しかない...
- C++クラスプラットフォームライブラリ
  - [SDL (Simple DirectMedia Layer)](https://www.libsdl.org/)
    - [Installation - SDL Wiki](http://wiki.libsdl.org/Installation)
      - Ubuntuだとaptで提供されている。
        ```
        $ sudo apt install -y libsdl2-2.0 libsdl2-dev
        ```
      - その他のディストリビューションに関してはリンク先を参照


## 内容
- ゲームループ
  - FPS (frames per second), フレームレート
  - 人間が見られるのはおよそ30FPSくらいから。
  - 現代だと60FPSはほしい。
- 各フレームにおける処理
  - 入力処理
    - キーボード・マウス・コントローラ
    - オンライン通信ゲームにおけるデータの取得
    - カメラ映像・GPS情報
  - ゲームワールド更新
    - 入力や時間等に応じて変化するオブジェクトの更新
  - 出力処理
    - グラフィックス
    - オーディオ
    - フォースフィードバック
      - コントローラの振動等
    - オンライン通信ゲームにおけるデータの送信
- シングルスレッドとマルチスレッド
  - 今回扱うのはシングルスレッドのみ
  - マルチスレッドは『[ゲームエンジンアーキテクチャ 第２版](https://www.sbcr.jp/products/4797377484.html)』(ジェイソン・グレゴリー)参照
    - [<img width="100px" src="/img/20150328_ゲームエンジンアーキテクチャ第２版.png" alt="">](https://www.sbcr.jp/products/4797377484.html)



