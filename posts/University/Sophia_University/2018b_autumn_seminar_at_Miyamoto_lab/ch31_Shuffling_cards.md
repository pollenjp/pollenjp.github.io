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

### "カードの束をランダムに並び替えるにはどれだけシャッフルすればよいか"
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
    - 最終的にはすべてがとても古典的な二つの組み合わせ問題に帰結する. (例: 切手コレクター・誕生日パラドクス)


### The birthday paradox
- $n$ : the number of random poeple
- "全員の誕生日が異なる確率は？"
- \\
  $$ p(n) = \prod\limits_{i=1}^{n-1} \left( 1 - \frac{i}{365} \right) $$\\
  枠をKで表すと\\
  $$ p(n, K) = \prod\limits_{i=1}^{n-1} \left( 1 - \frac{i}{K} \right) $$
- $n=23$のとき\\
  $$ p(23) = \prod\limits_{i=1}^{23-1} \left( 1 - \frac{i}{365} \right) \simeq 0.4927027656760145 < \frac{1}{2} $$\\
  ```
  #!/usr/bin/python3
  # birthday paradox
  def calculate_birthday_paradox_prob(n, K, p=1):
    for i in range(1,n):
      p *= 1 - i / K
    return p
  n = 23
  K = 365
  p = 1
  p = calculate_birthday_paradox_prob(n=n, K=K, p=p)
  print(p)  # output: 0.4927027656760145
  ```
- $n=42$のとき, $0.08596952843813076$
- $n=366$のとき, $0.0$ ( __pigeon-hole principle__ より明らかではある.)
- 証明：$i$番目の人までの誕生日が異なるとすると,$i+1$人目もそれまでの人と異なるためには,
  残りの$365-i$個の日にちのうちのどれかであればよいので,その確率は $\frac{365 - i}{365} = 1 - \frac{i}{365}$.


### The coupon collector
- ある子供が$n$種類の異なる有名人の写真のうち一つが入っているパックを買うとする. そのパックは実際にあけるまで中が見えないようになっている.
- このとき,"$n$種類のうち,それぞれの写真を少なくとも一枚ずつ入手するには何枚のパックを買うのがよいか？"
- この問題は"n個の異なる球(ball)が入っているボール(bowl)から復元抽出した際,
  それぞれの異なる球を少なくとも一個ずつ引くには平均何回試行すればよいか"という問題と同じ.
- もし,$k$個種類の異なる球を既に引いたとする. その次に引く球が新たな種類の球でない確率は $\frac{k}{n}$. 
  よって,次のちょうど$s$回の試行によって,$s$回のうちはじめて新たな種類の球を引く確率は\\
  $$\left( \frac{k}{n} \right) ^{s-1} \cdot \left( 1 - \frac{k}{n} \right)$$.\\
  　故に,次に新たな種類の球を引くのに必要な試行回数は,\\
  $$ \begin{align*}
  & \sum_{s \geq 1} \left( \frac{k}{n} \right) ^{s-1} \cdot \left( 1 - \frac{k}{n} \right) \cdot s \\
    &= \sum_{s \geq 1} \left( \frac{k}{n} \right) ^{s-1} s - \sum_{s \geq 1} \left( \frac{k}{n} \right) ^{s} s \\
    &= \sum_{s \geq 0} \left( \frac{k}{n} \right) ^{s} (s-1) - \sum_{s \geq 0} \left( \frac{k}{n} \right) ^{s} s \\
    &= \sum_{s \geq 0} \left( \frac{k}{n} \right) ^{s} \\
    &= \frac{1}{1-\frac{k}{n}} \ \ \ (\because \text{無限等比級数}) \\
    &= \frac{n}{n-k}
  \end{align*} $$ \\
  　つまり,$n$個のそれぞれのボールの種類に対して引くべき回数の和をとればよいので,\\
  $$ \begin{align*}
  & \sum_{k=0}^{n-1} \frac{1}{1-\frac{k}{n}} \\
    &= \frac{n}{n} + \frac{n}{n-1} + \frac{n}{n-2} + \cdots + \frac{n}{2} + \frac{n}{1} \\
    &= n H_n \ \ \ \left( H_n := \sum_{k=1}^{n} \frac{1}{k} \right) \\
    &\simeq n \log (n) \ \ \ \left( \because H_n = n \log (n) \right)
  \end{align*} $$ \\
  \\
  ※ $\sum_{k=1}^{n} \frac{1}{k} = n \log (n)$ <sup>[KW9](#fnkw9)</sup>.
- 　$n \log (n)$ 以上かかる確率を見積る.\\
  　$V_n$ : $n$個引くのにかかった試行回数. つまり,$E[V_n] \simeq n \log (n)$.\\
  　ここで,$n \geq 1, c \geq 0$ とすれば,必要な試行回数が $m := \lceil n \log (n) + cn \rceil$ より大きくなる確率は\\
  $$ \text{Prob} \left[ V_n > m \right] \leq e^{-c}$$
- 証明: \'
  $A_i$ : 球$i(=1, 2, \ldots, n)$が最初の$m$回の試行で引けない事象とすると,\\
  $$ \begin{align*}
  & \text{Prob} \left[ V_n > m \right] \\
    &= \text{Prob} \left[ \bigcup_{i=1}^n A_i \right] \\
    &\leq \sum_{i=1}^n \text{Prob} \left[ A_i \right] \\
    &= n \left( 1 - \frac{1}{n} \right) ^m \\
    &< n e ^{- \frac{m}{n}} \ \ \ ( \because \text{以下の※参照} )\\
    &= n e ^{- \frac{n \log (n) + cn}{n}} \\
    &= n e ^{- \log (n)} e ^{- c} \\
    &= n n^{-1} e ^{- c} \\
    &\leq e^{-c}
  \end{align*} $$ \\
  ※<sup>[KW10](#fnkw10)</sup>
- $n$ 枚のカードについて,上から順に $1, 2, \ldots, n$ とナンバリングする.
- ${\mathfrak S}_n$ を $1, \ldots, n$ の置換(permutation)とする.
- カードの束をシャッフルするということは何かしらのランダムな置換をカードの順番に適用したものに過ぎない.
- 　理想的には,初期順序 $(1, 2, \ldots, n)$ に対する任意の置換 $\pi \in {\mathfrak S}_n$ を考えればよく,
  各置換の発生確率は等確率で $\frac{1}{n!}$ (一様分布).
  ゆえに,置換 $\pi = \left( \pi (1), \pi (2), \ldots, \pi (n) \right)$ 一回の操作で,ランダムな状態にすることができる.
- 　しかし,現実はそうではない.　シャッフルによって起こし得る置換は限られていて, 
  おそらく置換の発生確率は等しいわけではない(一様分布ではない).
  この条件の下で置換が何回か繰り返される. その結果がランダムに近い状態であることが望ましい.


## Key Word

- <span id="fnkw1">[KW1]</span> : __random process__
  - > __stochastic process__ <sup>[KW2](#fnkw2)</sup> と同義. 
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
- <span id="fnkw9">[KW9]</span> : $\sum_{k=1}^{n} \frac{1}{k} = n \log (n)$
  - 証明 (page13)
- <span id="fnkw10">[KW10]</span> : $\left( 1 - \frac{1}{n} \right)^n < \frac{1}{n}$
  - 証明: \\
    ネイピア数 $ e := \lim_{n \to \infty} \left( 1 + \frac{1}{n} \right)^n $\\
    $$ \begin{align*}
    & \lim_{n \to \infty} \left( 1 - \frac{1}{n} \right)^n \\
      &= \lim_{n \to \infty} \left( \left( \left( 1 - \frac{1}{n} \right)^n \right)^{-1} \right)^{-1} \\
      &= \lim_{n \to \infty} \left( \left( \left( 1 - \frac{1}{n} \right)^{-1} \right)^n \right)^{-1} \\
      &= \left( \lim_{n \to \infty} \left( \frac{1}{1 - \frac{1}{n}} \right)^n \right)^{-1} \\
      &= \left( \lim_{n \to \infty} \left( \frac{n}{n-1} \right)^n \right)^{-1} \\
      &= \left( \lim_{n \to \infty} \left( 1 + \frac{1}{n-1} \right)^n \right)^{-1} \\
      &= \left( \lim_{n \to \infty} \left( 1 + \frac{1}{n-1} \right) 
        \cdot \lim_{n \to \infty} \left( 1 + \frac{1}{n-1} \right)^{n-1} \right)^{-1} \\
      &= \left( 1 \cdot e \right)^{-1} \\
      &= e^{-1}
    \end{align*} $$ \\
    　また, $\left( 1 - \frac{1}{n} \right)^n$ は $n$ に関する増加関数. 
    よって, $\left( 1 - \frac{1}{n} \right)^n$ は $\frac{1}{e}$ に漸近的に近づく.(Q.E.D.)
- __Top-in-at-random shffles__ <sup>[KW7](#fnkw7)</sup>


