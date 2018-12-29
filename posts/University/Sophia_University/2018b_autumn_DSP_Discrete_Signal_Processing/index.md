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


# Discrete Signal Processing

- [This page](./index.html)


## 数式テスト

$\boldsymbol{aaa}$

$$
a = b
$$

\begin{align}
  a &= b \\\\
    &= c
\end{align}

$$
\begin{align}
  a &= b \\
    &= c
\end{align}
$$

$$ \begin{align} a &= b \\ &= c \end{align} $$


## サイト情報
- [MATLABで学ぶディジタル信号処理の基礎](http://www.mk.ecei.tohoku.ac.jp/jspmatlab/)


## Key Word

- <span id="fnkw1">[KW1]</span> : __STFT (Short-Time Fourier Transform) 短時間フーリエ変換__
  - [短時間フーリエ変換(STFT) - numpyでスペクトログラムによる音楽信号の可視化 - Qiita](https://qiita.com/namaozi/items/dec1575cd455c746f597#%E7%9F%AD%E6%99%82%E9%96%93%E3%83%95%E3%83%BC%E3%83%AA%E3%82%A8%E5%A4%89%E6%8F%9Bstft)
  - > 関数に窓関数をずらしながら掛けて,それにフーリエ変換すること. ([短時間フーリエ変換 - Wikipedia](https://ja.wikipedia.org/wiki/%E7%9F%AD%E6%99%82%E9%96%93%E3%83%95%E3%83%BC%E3%83%AA%E3%82%A8%E5%A4%89%E6%8F%9B))

- <span id="fnkw2">[KW2]</span> : __ハミング窓__
  - [ハミング窓 - 窓関数 - Wikipedia](https://ja.wikipedia.org/wiki/%E7%AA%93%E9%96%A2%E6%95%B0#%E3%83%8F%E3%83%9F%E3%83%B3%E3%82%B0%E7%AA%93)
    - > ハン窓と並び、最もよく使われる窓関数の一つ。ハン窓より周波数分解能が良く、ダイナミック・レンジが狭い。区間の両端で不連続なのが特徴。
    - > $w(x) = 0.54 - 0.46 \cdot \cos \left( 2 \pi x \right) \ \ (\text{if} 0 < x \lt 1)$

- <span id="fnkw3">[KW3]</span> : __パワースペクトル__
  - \\
    $$
    \begin{align*}
      F(\omega) &= {\mathscr F} \left[ x[n] \right] (\omega) \\
      p(\omega) &= 10 \log_{10} |F(\omega)|^2 \\
                &= 20 \log_{10} |F(\omega)|
    \end{align*}
    $$ \\
    [周波数特性 - 信号処理 - ++C++; // 未確認飛行 C](https://ufcpp.net/study/sp/dsp/frequency/)
  - > 振幅特性$|F(\omega)|$そのものではなく,振幅の対数を取ったものがよく用いられます. デシベル[dB].
    工学の分野では,振幅特性よりも,振幅を2乗したものをよく使います. 信号の振幅を電気的に測定した場合, その値は電圧[V]という形で得られます. 要するに,振幅の2乗というのは,電圧の2乗$=$電力[W]を表す値と言うことになります. そのため,振幅特性を2乗したものはパワースペクトル (power spectrum)と呼ばれる.
    [周波数特性 - 信号処理 - ++C++; // 未確認飛行 C](https://ufcpp.net/study/sp/dsp/frequency/)
  - [Spectrum Representations — Matplotlib 3.0.2 documentation](https://matplotlib.org/gallery/lines_bars_and_markers/spectrum_demo.html)
  - __対数振幅スペクトル__
  - [ケプストラム分析 - 人工知能に関する断創録](http://aidiary.hatenablog.com/entry/20120211/1328964624)
- <span id="fnkw4">[KW4]</span> : __パワースペクトル密度 (power spectrum density)__
  - ([What is a Power Spectral Density (PSD)? - Siemens PLM Community](https://community.plm.automation.siemens.com/t5/Testing-Knowledge-Base/What-is-a-Power-Spectral-Density-PSD/ta-p/360969))


