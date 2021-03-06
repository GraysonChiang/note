# 第五章 機率分佈

## 隨機變數
> 定義：係依樣本空間為定義域的實數值函數

<br>

## 機率分佈
### 1. 間斷機率分佈
* 間斷隨機變數 $X$ 之機率分佈，指將各個不同的 $x$ 值與其對應之機率值逐一列出的表，有時亦可以公式來取代其詳細的表列
* 間斷隨機變數 $X$ 之機率分佈可以函數表示：
$$f(x_i) = P(X = x_i)$$
* 其中 $f(x_i)$ 必須滿足
    * 對於 $X$ 中的每一 $x_i$ ， $0 \leq f(x_i) \leq 1$
    * $\sum_{e_i \in E}^k {f(x_i) = 1}$ ， $X$ 可能值為 $x_i$ , $i=1,2,3...k$

### 2. 連續機率分佈

* 機率密度函數 Probability density function
    * $f(x)$ 乃描述一連續隨機變數 $X$ 之機率分佈，並具有下列之特性
        * 機率密度曲線以下所涵蓋的總面積等於 1
        * $P(a \leq X \leq b) =$ 機率密度曲線下，介於 $a$ 與 $b$ 之間的面積
        * 對於 $X$ 之所有可能值的範圍而言 $f(x) \geq 0$
    * 公式
    $$Pr(a \leq X \leq b ) = \int_a^b f(x) \times dx$$

* 直方圖特性
    * 面積總和為 1
    * 就某些組的邊界點 $a$ 與 $b$ 而言，介於 $a$ 與 $b$ 之間相對次數為該區間內，直方圖所表示的面積

<br>
<br>

## 聯合機率分佈
> 若考慮二維或以上的樣本空間，則可定義出二個或以上的隨機變數

> 同時考慮二個以上的隨機變數之機變數之機率分佈，此即`聯合機率分佈`

> 如同機率分佈一樣，聯合機率分佈(以後簡稱為聯合分佈)亦可分為`間斷聯合分佈`與`連續聯合分佈`

### 1. 間斷隨機變數

#### 聯合機率分佈
* 列出間斷隨機變數 $X$ 與 $Y$ 之所有可能值 $x$ 與 $y$ ，以及其所應對的機率值 $f(x,y)$ 之表格或數學式，則為 $X$ 與 $Y$ 的聯合分佈
* 當 $X$ 與 $Y$ 為間斷隨機變數時
$$f(x,y) = P (X = x,Y =y)$$

#### 邊際機率分佈
* $X$ 與 $Y$ 之`聯合分佈`和其`機率分佈`關係
$$g(x) = \sum_{y\in S(Y)} f(x,y) , x \in S(X)$$
$$h(y) = \sum_{x\in S(X)} f(x,y) , y \in S(Y)$$

#### 條件機率分佈
* 設有 $X$ 與 $Y$ 兩個隨機變數之`聯合分佈`，且其`邊際機率`分佈為 $g(x)$  與 $h(y)$ 。在給定 $X = x$ 下， $Y$ 的`條件機率分佈` 為：
$$f(y|x) = { f(x,y) \over g(x) }, g(x) > 0$$
同理，在給定 $Y = y$ 下， $X$ `條件分佈`為：
$$f(x|y) = { f(x,y) \over h(y) }, h(y) > 0$$

#### 獨立的隨機變數
* 設 $X$ 與 $Y$ 為任意兩個隨機變數，其聯合分佈與邊際機率分佈分別為 $f(x,y)$ , $g(x)$ , $h(y)$，若 $X$ 的條件分佈等於其邊際機率分佈，即：
$$f(x|y) = g(x)$$
則稱將變數 $X$ 與 $Y$ 互為獨立。同理，若 $Y$ 的條件分佈等於其邊際機率分佈，即
$$f(y|x) = h(y)$$
則稱隨機變數 $X$ 與 $Y$ 互為獨立

#### 兩獨立隨機變數的性質
* 設 $X$ 與 $Y$ 為獨立的兩個`隨機變數`，則 
$$f(x,y) = g(x) \times h(y)$$

### 2. 連續隨機變數

#### 聯合機率分佈
* 特性
    * 式中的範圍 $a \leq x \leq  b$ , $c \leq y \leq  d$ ，分別表示隨機變數 $X$ 與 $Y$ 之範圍
$$f(x,y) \geq 0$$
$$\int_a^b \int_c^d f(x,y) \times dy \times dx = 1$$

#### 邊際機率分佈
* 在間斷隨機變數中，已知 $X$ 或 $Y$ 的機率分佈，且若個別求出 $X$ 與 $Y$ 單獨之機率分佈 $g(x)$ 與 $h(y)$，此時 $g(x)$ 與 $h(y)$ 便稱為 $X$ 與 $Y$ 之`邊際機率分佈`
* $X$ 與 $Y$ 之聯合分佈和其邊際機率分佈的關係
$$g(x)  = \int_y f(x,y) \times dy$$
$$h(y)  = \int_x f(x,y) \times dx$$

#### 條件機率&分佈獨立性

* 設有 $X$ 與 $Y$ 兩個隨機變數之聯合分佈，且其邊際機率分佈分別為 $g(x)$ 與 $h(y)$，在給定 $X=x$ 下， $Y$ 的條件機率分佈
$$f(y|x)={ f(x,y)\over g(x)} , g(x) > 0$$
必須滿足
$$ f(y|x)\geq 0$$
$$\int_y f(y|x)dy=1$$


* 連續隨機變數獨立的性質
    * 設 $X$ 與 $Y$ 為兩個獨立連續隨機變數，則
$$f(x|y) = g(x) \times h(y)$$

<br>

## 期望值
* `間斷隨機變數` $X$ 的平均數或期望值
    * 式中 $x$ 乃在 $X$ 之可能值 $S(X)$ 的範圍內，而 $f(x)$ 則為 $X$ 之機率分佈
    $$u = E(X) = \sum_{x\in S(X)} x \times f(x)$$

* `間斷隨機變數函數`的期望值
    * 令 $X$ 為間斷隨機變數，其機率分佈為 $f(x)$ ，則 X 之函數 g(X) 的期望值為：
    $$E[g(X)] = \sum_{x \in S(X)} g(x) \times f(x)$$
    
* `連續隨機變數`的期望值
    * 設 $X$ 與 $Y$ 為兩個`連續隨機變數`，則期望值為：
        * 式中 $x$ 屬於 $X$ 的範圍值內， $y$ 屬於 $Y$ 的範圍值內，且 $g(x)$ 為 $x$ 之機率分佈， $h(y)$ 則為 $y$ 之機率分佈
    $$u = E(X) = \int_x \int_y x \times f(x,y)  \times dydx = \int_x x \times g(x) \times dx$$
    $$u = E(Y) = \int_y \int_x y \times f(x,y)  \times dxdy = \int_y y \times h(y) \times dy$$

* 聯合機率分佈的期望值
    * 令 $X$ 為間斷隨機變數，其聯合機率分佈為 $f(x,y)$，則隨機變數 $g(x,y)$ 的期望值定義為：
    $$E[g(X,Y)] = \sum_{x \in S(X)}  \sum_{y \in S(Y)} g(x,y) \times f(x,y)$$
    
<br>

## 變異數
* `隨機變數`的變異數
    * 令 $X$ 為一`間斷隨機變數`，其機率分佈為 $f(x)$，則 $X$ 的變異數為：
    $$\sigma^2 = E[(X- \mu )^2] = \sum_{x \in S(X)} (x - \mu)^2 \times f(x)$$
    $$\sigma^2 = E[X^2] - [E(X)]^2$$
    $$\downarrow$$
    $$\sum_{x\in S(X)} x^2 \times f(x) - \mu^2$$
* `隨機變數`的標準差
$$Sd(X)= \sqrt{Var(X)} = \sigma$$

* $X$ 與 $Y$ 的聯合分佈 $f(x,y)$ 之 $X$ 與 $Y$ 的變異數
    * $X$ 的變異數
    $$Var(X) = \sum_x \sum_y (x- \mu_x )^2 \times f(x,y)$$
    $$= \sum_x (x- \mu_x)^2 \times g(x)$$
    因為 $g(x)= \sum_y \times f(x,y)$
    * $Y$ 的變異數
    $$Var(Y) = \sum_x \sum_y (y- \mu_y )^2 \times f(x,y)$$
    $$= \sum_y (y- \mu_y)^2 \times h(y)$$
    因為 $h(y)= \sum_x \times f(x,y)$
* 補充
    * $X$ 與 $Y$ 聯合分佈 $f(x,y)$
    * $X$ 與 $Y$ 邊際分佈 $g(x)$ & $h(y)$
    * $X$ 與 $Y$ 期望值 $\mu_x$ & $\mu_y$

<br>

## 切比雪夫定理
* Chenyshev 定理適用於任何機率分佈，包括任何型態的`間斷分佈`與`連續分佈`
* 若隨機變數 $X$ 具有平均數 $\mu$ ，變異數 $\sigma^2$ ，則下式成立：
$$P(|X- \mu| < k \sigma) \geq 1 - { 1 \over k^2 } , k > 1$$

<br>
<br>

## 期望值的性質
* 兩隨機變數`和`與`差`的期望值
    * 設 $X$ 與 $Y$ 為任意兩個隨機變數，其聯合分佈為 $f(x,y)$ ，則 $X$ 與 $Y$ 之`和`及`差`的期望值為：
    $$E(X+Y) = E(X) + E(Y)$$
    $$E(X-Y) = E(X) - E(Y)$$
    
* 兩隨機變數`乘積`的期望值
    * 設兩個隨機變數 $X$ 與 $Y$ 互為獨立，則：
    $$E(XY) = E(X) \times E(Y)$$
 
<br>

## 變異數的性質
* 兩隨機變數`和`與`差`的變異數性值
    * 設 $X$ 與 $Y$ 為任意兩個隨機變數，且互為獨立，則：
    $$Var(X+Y) = Var(X) + Var(Y)$$
    $$Var(X-Y) = Var(X) - Var(Y)$$
    
* 兩個以上隨機變數`和`的變異數性質
   * 設 $X_1$ , $X_2$ , $X_3$ ... $X_n$ 為任意 $n$ 個隨機變數 ，則
   $$E(X_1 + X_2+ ... + X_n) = E(X_1) + E(X_2) + ... + E(X_n)$$
   
   * 另外，若 $X_i$ 皆互相獨立，則
   $$Var(X_1 + X_2+ ... + X_n) = Var(X_1) + Var(X_2) + ... + Var(X_n)$$
    
### 共變數
* 一個共變異數用於衡量兩個變量的總體誤差，通常以 $Cov(X,Y)$ 表示有以下觀念

    * 變異數是共變異數的一種特殊情況，即當兩個變量是相同的情況
    * 如果兩個變量的變化趨勢一致，也就是說如果其中一個大於自身的期望值，另外一個也大於自身的期望值，那麼兩個變量之間的共變異數就是正值。如果兩個變量的變化趨勢相反，那麼兩個變量之間的共變異數就是負值
    * 如果 $X$ 與 $Y$ 是統計獨立的，那麼二者之間的共變異數就是0，這是因為
$E(XY) = E(X) \times E(Y)= \mu v$，但是反過來並不成立，即如果 $X$ 與 $Y$ 的共變異數為 `0`，二者並不一定是統計獨立的。僅表明 $X$ 與 $Y$ 兩隨機變量之間沒有線性相關性

* 公式
$$Cov(X,Y) = E[(X - \mu_x )(Y - \mu_y )]$$

<br>

## 補充
* PDF：機率密度函數（probability density function）
    * 連續行型隨機變數的機率密度函數（簡稱為`密度函數`）是一個描述這個隨機變數的輸出值，在某個確定的取值点附近的可能性的函數。

* PMF：機率質量函數（probability mass function)
    * 是`離散隨機變數`在各特定取值上的機率

* CDF：累積分佈函數 (cumulative distribution function)
    * 又叫分佈函数，是機率密度函數的積分，能完整描述隨機變數 $X$ 的機率分佈