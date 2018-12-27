
## 元論文

 [[1809.00778] PFDet: 2nd Place Solution to Open Images Challenge 2018 Object Detection Track]( https://arxiv.org/abs/1809.00778)


## 箇条書き

- Introduction
  - OID (object image detection dataset v4)
  - 並列処理の困難さ
    - Large MiniBatch Object Detector (MegDet)
    - multi-node
    - batch size 512
    - 512gpus
  - 今までに無いOIDの特徴
    - 今まで：ちゃんと全ての物体がアノテーションされていた
    - OID：写真に写り込んでいるかどうかが定かで無いもののアノテーションは省略されている
    - これはデータセットのクラスラベルを拡張するのに現実的なアプローチ. 
      なぜなら,スパースでないラベルづけをした場合,クラスが増えるにつれ, アノテーションする数が爆発的に増加するから.
    - アノテーションをスパースにするということは,
      CNNベースの物体検出器は枠で囲まれた正解データ以外の領域を背景として学習する.
    - つまり,それによって他の写真でアノテーションされていない物体が存在すると,
      ある写真でアノテーションされていたとしても
      抽出した bounding box を背景としてしまう.
    - スパースなアノテーションは誤ったラベリングを引き起こしやすい.
      他のクラスラベルの一部になっているクラスラベルとして存在するときは特に.
      我々は`partクラス`(例：腕)と`subjectクラス`(例：人)と読んでいる.
    - これらの気づきから `*co-occurence loss*` (日本語にするなら同時発生損失???) を考案した.
    - `subjectクラス`の
      [ground truth boxes](https://www.quora.com/What-is-the-meaning-of-term-ground-truth-in-object-tracking-algorithms)
      と近い位置に bounding box 検出されたとき, `*co-occurence loss*`は
      その`subjectクラス`の`partクラス`を分類するために,全ての学習中の信号を無視する.
    - これによって`partクラス`の分類パフォーマンスがかなり向上した.
  - 過去に無いほどの,各クラスの出現数
    - Pressure Cooker : 13 images
    - Person : 800k images
    - 最大と最小の比率は MS COCO の183倍
      
    


## 関連ワードなど

- PFDet
  - [[1809.00778] PFDet: 2nd Place Solution to Open Images Challenge 2018 Object Detection Track]( https://arxiv.org/pdf/1809.00778.pdf)
- Large MiniBatch Object Detector (MegDet)
  - [[1711.07240] MegDet: A Large Mini-Batch Object Detector]( https://arxiv.org/abs/1711.07240)
  - > we propose a Large MiniBatch Object Detector (MegDet) to enable the training with much larger mini-batch size than before (e.g. from 16 to 256), so that we can effectively utilize multiple GPUs (up to 128 in our experiments) to significantly shorten the training time.
- FPN 
  - [[1612.03144] Feature Pyramid Networks for Object Detection]( https://arxiv.org/abs/1612.03144)
- SENet
  - [[1709.01507] Squeeze-and-Excitation Networks]( https://arxiv.org/abs/1709.01507)
  - https://github.com/hujie-frank/SENet
- ResNeXt
- Faster R-CNN [[1803.03243] Domain Adaptive Faster R-CNN for Object Detection in the Wild]( https://arxiv.org/abs/1803.03243)
- PSP 
  - [[1612.01105] Pyramid Scene Parsing Network]( https://arxiv.org/abs/1612.01105)
  - CNN精度向上させるプーリング
  - [SPP(Spatial Pyramid Pooling)を使ってCNNの精度を向上させよう - 俺とプログラミング](https://www.iandprogram.net/entry/2016/02/15/200242)
- [年末に試したい、画像認識モデルの自動設計 – arXivTimes – Medium]( https://link.medium.com/F0Ofp1akKS)
- MS COCO
  - [[1405.0312] Microsoft COCO: Common Objects in Context](https://arxiv.org/abs/1405.0312)
