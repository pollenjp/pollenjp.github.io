<!-- ================================================================================ -->
<!-- ==========================  mathjax  =========================================== -->
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [ ['$','$'], ["\\(","\\)"] ],
      processEscapes: true
    }
  });
</script>
<!--
  Mathjax inline mode not rendering - TeX - LaTeX Stack Exchange
  https://tex.stackexchange.com/questions/27633/mathjax-inline-mode-not-rendering
-->

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML">
</script>
<!-- ================================================================================ -->


# Chapter31 - Shuffling cards

- [This page](./ch31_Shuffling_cards.md)

## 箇条書き

- "カードの束をランダムに並び替えるにはどれだけシャッフルすればよいか"
  - __不規則過程__ <sup>[KW1](#fnkw1)</sup> ( __確率過程__ <sup>[KW2](#fnkw2)</sup>) の解析することは
    数学においてだけでなく,生活においても知れたことである.
    例えば,"通勤ラッシュ時に空港までどのくらい時間がかかるか"など.
  - カードシャッフル問題
    - カードの束のサイズを決める (n=52)
    - シャッフルの仕方 ( __top-in-at-random__ <sup>[KW7](#fnkw7)</sup>, __riffle shuffle__ <sup>[KW8](#fnkw8)</sup> )
    - ここで言う"ランダム"とは,”ランダムな状態に近い”ということを意味している.
  - このチャプターの目標
    - __riffle shuffle__ <sup>[KW8](#fnkw8)</sup> の分析.
    - この本では”52枚(n=52)のカードに対してランダムといえる状態にするためには,6回のリッフルシャッフルでは不十分であるが,
      ７回のリッフルシャッフルで十分である”という最終的な結論に至るまでは扱わない.
    - 今回は上限12枚に対して行う.
    - 以下のきわめて美しい考え方を学ぶことにする
      - __stopping rule__
      - __strong uniform time__
      - __Reed's inversion lemma__ ... the strong uniform time bounds the variation distance
      - シャッフル = "__reversed sorting__" という解釈
      - 最終的にはすべてがとても古典的な二つの組み合わせ問題に帰結する. (例: カード収集・誕生日パラドクス)
- The birthday paradox
  - $n$ : the number of random poeple
  - "全員の誕生日が異なる確率は？"
  - \\
    $$
    p(n) = \prod\limits_{i=1}^{n-1} \left( 1 - \frac{i}{365} \right)
    $$
  - $n=23$のとき\\
    $$
    \prod\limits_{i=1}^{23-1} \left( 1 - \frac{i}{365} \right) \simeq 0.4927027656760145 < \frac{1}{2}
    $$\\
    ```
    #!/usr/bin/python3
    # birthday paradox
    n = 23
    K = 365
    p = 1
    for i in range(n):
      p *= 1 - i / K
    print(p)
    ```


## Key Word

- <span id="fnkw1">[KW1]</span> : __random process__
  - >  continuous or discrete. Real random process also called __stochastic process__ <sup>[KW2](#fnkw2)</sup> . 
    ([Chapter6_Dig_Random_Proc.ppt](https://web.sonoma.edu/users/f/farahman/sonoma/courses/ces540/lectures/Chapter6_Dig_Random_Proc.pdf))
- <span id="fnkw2">[KW2]</span> : __stochastic process (確率過程)__
  - > 確率論において, __確率過程__ (かくりつかてい,英語: __stochastic process__ )は,時間とともに変化する確率変数のことである.
     株価や為替の変動,ブラウン運動などの粒子のランダムな運動を数学的に記述する模型(モデル)として利用している. 
     __不規則過程__ (英語: __random process__ )とも言う. 
    ([確率過程 - Wikipedia](https://ja.wikipedia.org/wiki/%E7%A2%BA%E7%8E%87%E9%81%8E%E7%A8%8B))
  - \\
    > 確率空間<sup>[KW3](#fnkw3)</sup> $( \Omega, {\mathcal F}, P )$, 
    可測空間<sup>[KW4](#fnkw4)</sup> $(S, \Sigma)$, 全順序集合<sup>[KW5](#fnkw5)</sup> $T$ が与えられたとき,
    時刻 $T$ で添字つけられる状態空間 $S$ に値をとる確率過程 $X_t$ とは \\
    $$ X: \Omega \times T \rightarrow S $$ \\
    ([確率過程 - Wikipedia](https://ja.wikipedia.org/wiki/%E7%A2%BA%E7%8E%87%E9%81%8E%E7%A8%8B))
  - > The term random function is also used to refer to a stochastic or random process. 
    ([https://en.wikipedia.org/wiki/Stochastic_process](https://en.wikipedia.org/wiki/Stochastic_process))
- <span id="fnkw3">[KW3]</span> : __確率空間__
  - > 確率空間 $( \Omega, {\mathcal F}, P )$ とは以下から成る三組のことである.
    >
    > 1. $\Omega$ をある集合.
    > 1. ${\mathcal F}$ を $\Omega$ を含む $\Omega$ の部分集合で $\sigma$ 加法族<sup>[KW6](#fnkw6)</sup>であるもの.
    > 1. $P$ を ${\mathcal F}$ から実数全体 ${\mathbb R}$ への写像 $P: {\mathcal F} \rightarrow {\mathbb R}$ で次を満たすもの.
    >   - $P(E) \geq 0$
    >   - $E_1, E_2, \ldots$ が互いに素(共通部分を持たない)なら,$P( \cup_i E_i ) = \sum_i P(E_i)$
    > \\
    > ([『パターン認識と機械学習の学習 普及版』（PDF）](https://herumi.github.io/prml/))
- <span id="fnkw4">[KW4]</span> : __可測空間__
- <span id="fnkw5">[KW5]</span> : __全順序集合__
- <span id="fnkw6">[KW6]</span> : __$\sigma$ 加法族__
  - > ([『パターン認識と機械学習の学習 普及版』（PDF）](https://herumi.github.io/prml/))
- <span id="fnkw7">[KW7]</span> : __top-in-at-random__
- <span id="fnkw8">[KW8]</span> : __riffle shuffle__
  - [シャッフル (カード) - Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%A3%E3%83%83%E3%83%95%E3%83%AB_(%E3%82%AB%E3%83%BC%E3%83%89)#%E3%83%AA%E3%83%95%E3%83%AB%E3%82%B7%E3%83%A3%E3%83%83%E3%83%95%E3%83%AB)
  - [Edgar Nelson Gilbert](https://en.wikipedia.org/wiki/Edgar_Gilbert) 
  - [Claude Elwood Shannon (1955, unpublished)](https://en.wikipedia.org/wiki/Claude_Shannon)
  - Jim Reeds (1981, unpublished)
  - [David John Aldous](https://en.wikipedia.org/wiki/David_Aldous)
  - [Persi Warren Diaconis](https://en.wikipedia.org/wiki/Persi_Diaconis)







