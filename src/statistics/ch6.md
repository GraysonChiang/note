# 第六章 常用的機率分配

![](https://github.com/GraysonChiang/note/blob/master/src/statistics/images/ch6.jpg?raw=true)

## 二項分配
* 特性
    * 重複進行 $n$ 次完全相同的`試驗`
    * 每一次試驗皆僅有兩種可能結果，其一稱為「成功」$(S)$，另一則稱為「失敗」$(F)$
    * 每一次試驗中，出現成功的結果之機率固定為 $p$ ，出現失敗之結果的機率固定為 $(1-p)$
    * 每一次試驗之間接互相獨立

<br>

## 超幾何
* 特性
    * 從一含有 $N$ 物的有限母體中，採不放回抽樣抽出大小為 $n$ 的隨機樣本
    * $N$ 物中有 $S$ 個屬成功類，另 $N-S$ 個屬失敗類
* 分配
    * 式中的符號 $N$ , $S$ , $n$ , $x$ 皆同於前文所述，另外 $x$ 的範圍是從 $Max \lbrace 0,n-(N-S) \rbrace $ 至 $Min \lbrace n,S \rbrace$
    $$ f(x) =  { c_x^s c_{n-x}^{N-s}   \over  c_n^N }$$

* 期望值
    * 令 $X$ 代表超幾何隨機變數
$$ E(X) = n \times p $$

* 變異數
    * 令 $X$ 代表超幾何隨機變數
$$ Var(X) = { N - n \over N-1} np(1-p) $$

#### 與兩項分配的關係

<br>
<br>

## 幾何分配
* 分配
    * 令 $X$ 表示第一次成功發生所需的貝努利試驗次數，且 $p$ 表示成功機率，且 $q = 1-p$ ，則 $X$ 的機率分配為：
    $$ f(x) = q^{x-1} p , x = 1,2,... $$
    
* 期望值
    * 令 $X$ 代表幾何分配的隨機變數
$$ E(X) = {1 \over p }$$

* 變異數
    * 令 $X$ 代表幾何分配的隨機變數
$$ Var(X) = { q \over p^2 } $$

<br>

## Poisson 分配
* 分配
    * 式中 $\lambda$ 表示在某特定區間內某事件所發生的平均次數，而 $e = 2.71828$
    $$ f(x) = { e^{-\lambda} \times \lambda^x \over x !}  , x = 0,1,2,3, ...$$

* 期望值
    * 令 $X$ 為 Poisson 隨機變數，則
$$ E(X) = \lambda $$

* 變異數
    * 令 $X$ 為 Poisson 隨機變數，則
$$ Var(X) =  \lambda $$

*  與二項分配的關係

@flowstart
st=>start: Start
e=>end: End

st->e
@flowend

<br>

## 負二項分配

