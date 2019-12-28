# 研究方法

## 第一章 資料概說

#### 資料型態
||質化|量化|➗可乘除|➕可加減|範例|
| :-: | :---: | :---: |:---:|:---:|---|
|名目尺度<br>(類別尺度)|✅||||性別(1男、0女)<br>手機品牌(1蘋果、2三星、3小米)<br>手機用途、居住區域、血型|
|順序尺度|✅||||學校排行<br>消費者對產品的偏好順序<br>教育程度(1國中、2高中、3大學)<br>每月通話費用等級區分|
|區間尺度<br>(李克特尺度)||✅||✅|選購動機(同意 -> 不同意)<br>滿意程度(滿意 -> 不滿意)<br>再購意願|
|比例尺度||✅|✅|✅|年所得、長度、重量<br>年齡、換購手機預算|
        
<br>
        
#### 使用區分及案例
|`X`|`Y`|適用檢定|使用案例|
|:---:|:---:|---|---|---|
|質|質|卡方檢定|1.不同「居住地區」的消費者對「手機品牌」的選擇偏好是否有差異<br>2.消費者「性別」對於「汽車顏色」的偏好是否有關聯|
|質|量|T檢定<br>變異數分析|1.使用電腦的「主要用途」對「平均購買電腦預算」之影響<br>2.消費者的「信用等級」與銀行「核貸金額」是否有關聯|
|量|質|區別分析| 1.消費者「年所得」對「手機品牌」的選擇偏好是否有差異<br>2.消費者「年齡」對於「汽車品牌」的選擇偏好是否有關聯|
|量|量|相關分析<br>遞迴分析|1.消費者「年齡」對於「手機購買預算」是否有關聯<br>2.消費者「年所得」對「平均購買電腦預算」之影響|

| x\y | 質化 | 量化 |
| --- | --- | --- |
| 質化 | 卡方檢定 | T檢定<br>變異數分析 |
| 量化 | 區別分析 | 相關分析<br>遞迴分析 |

<br>

## 第二章 敘述統計

#### 相對量數

* 百分位數 (Percentiles)
    * 定義：第 `p` 個百分位數係指某一個數值 $X_{i}$，使得資料中有 $p\%$ 部份觀察值小於 $X_{i}$
    * 計算方法如下
        * 將資料由小到大排序 
        * 計算 $I = ( p\% \times sample )$ 之位置
        * 若 `I ` 不為整數，無條件進位取比 `I` 還大之整數，即得第 `p` 個百分位數 
        * `I` 為整數，即第 `p` 個百分位數為第 ` I ` 和 `I+1` 的平均 or 選下一個值

* 變異係數 (CV)
    * 用途：對於不同單位資料之比較
    * 公式
    
    $$C_v = {\sigma \over \mu }$$

    <br>

    * 樣本公式

    $$C_v = {S \over\overline{X} } \times 100 $$
    
    <br>
    
    * 母體公式
    
    $$C_v = {\sigma \over \mu } \times 100 $$

    * 變數
        * $S$：樣本標準差 
        * $\overline{X}$：樣本平均數
        * $\sigma$：母體標準差
        * $\mu$：母體平均數

<br><br>

## 第五章 平均值檢定
* 單一樣本 T 檢定
    * 目的：用於比較母體平均值與一特定值，採用`p-value`法來判斷檢定結果
    * `p-value` 係指以現有樣本統計量拒絕 `H0` 時之型 `I` 錯誤機率
    * 範例：銀行客戶平均存款是否大於 400 萬？
* 獨立樣本 T 檢定
    * 獨立樣本 T 檢定是比較來自兩母體之獨立樣本，檢定該`兩母體`平均值之差異
    * 範例：比較銀行客戶之平均存款是否因性別而有所不同 (性別：男、女 不等於) 
* 成對樣本 T 檢定
    * 重覆量數
    * 配對組法

    <br><br>

## 第六章 變異數分析 ANOVA

#### 1. 變異數

* 公式

$$ F = MSB / MSW $$
<br>

* `MS` 代表均方  
    * 總變異 = 組間變異 + 隨機變異
* 組間變異(SSB)：又稱處理總變異

    $$ SSB = \sum_{i=1}^{k}n_{i}(\overline{X_{i}} - \overline{\overline{X}})^2 $$
    
    
    <br>    
* 組內變異(SSW)：是同一組的數值間計算變異
    * 每個數值減去平均值, 然後平方, 再相加, 就是這一組的變異
    
    $$ SSW = \sum_{i=1}^{k}\sum_{j=1}^{n}(X_{ij} - \overline{X_i})^2 $$

    <br>
    
* 總變異(SST)

$$ SST = \sum_{i=1}^{k}\sum_{j=1}^{n}(X_{ij} - \overline{\overline{X}})^2 $$

<br>

#### 2. 分析
* 單變量變異數分析
    * 範例：探討不同科系(質X)之平均數學成績(量Y)是否有影響
* 雙因子變異數分析
    * `自變項`對`依變項`的影響效果可分為：`主效果`、`交互效果`
    * 流程：
        1. `如果有兩個以上的因子，先判斷因子間有無交互作用`
        2. 若沒有交互作用，則只要各自檢定主效果即可(同單因子變異數分析)
        3. `若存在交互作用，則`須進一步深入分析，即進行所謂條件式的主要效果分析(單純主要效果)，
    * 範例：控制某一因子，再分析檢定另一因子之效應。但在存有交互作用的情況下，主要效果的分析較沒有實質的意義，因為A因子對依變項的影響效果會受到B因子的左右；同樣的，B因子的效果亦會受到A因子的影響。
        
<br><br>           
           
#### 3. 事前 / 後比較
* `事前比較`：事先計劃好比較項目，屬`檢驗性統計分析`，主要以 `t 統計法` 為主

    | 常用 |方法 | 統計量 | 各組樣本數 | 型 `I` 錯誤
    | :---: | --- | :---: | --- | :---: |
    | |Fisher | `t` | 可相同或不同 | 最高 |
    | |Dunnett | `t` | 可相同或不同|居中|
    | |Bonferroni | `t` | 可相同或不同|居中|
    
* `事後比較(Post Hoc)`：事先並未計畫欲比較之項目，當 `ANOVA` 發現平均數存在顯著差異之現象後，進一步檢視各平均數間何者存有顯著差異，屬於`探索性資料分析`，以 `F 統計法` 或 `q 統計法` 為主

    | 常用 |方法 | 統計量 | 各組樣本數 | 型 `I` 錯誤
    | :---: | --- | :---: | --- | :---: |
    | v|Scheffe | `F` | 可相同或不同 | 最低 |
    | |HSD | `q` | 需相同 |較高|
    | |Duncan's Method | `q` | 需相同 |居中|

<br><br>

## 第七章 卡方檢定
>測試某類別資料出現的頻率是否隨著另一個類別資料的不同層級而有不同的分布
>白話：例如`職業`與`性別`，兩種不同類型的資料

* 適用於：`質化 X`，`質化 Y`
* 特型：卡方值越大，`H1` 成立的機會越高
* 列聯表：`2`個變因，一個 X，一個 Y，用表的方式表達出來就是列聯表
    * 注意事項：列聯表中任何一格的期望次數 ($E_{ij}$) 小於 `5` 是一個警示，但若有超過 `20%` 的格子期望次數小於`5`，則不應使用 `Pearson卡方檢定`，如果理論值與實際值差異越大，影響值就大

    <br>
* 公式：

$$X^2 = \sum_{i}\sum_{j} {(O_{ij} - E_{ij})^2 \over E{ij}}$$

<br>

#### 1. 檢定類型
>由於獨立性檢定與同質性檢定的資料皆可用列聯表來表示，因此這 `同質性檢定` 和 `獨立性檢定` 又稱為列聯表分析

* 獨立性檢定
    * 獨立性檢定適用在探討在同一組樣本中兩個變數間的關聯性；例如：長期過量飲酒和肝癌發生的相關性。當檢定結果為顯著時 (亦即結果[拒絕虛無假設](http://yourgene.pixnet.net/blog/post/116944086-%E5%81%87%E8%A8%AD%E6%AA%A2%E5%AE%9A(hypothesis-testing)))，就表示兩個變數相關；反之當檢定結果不拒絕虛無假設時，則代表兩變數互為獨立。
    * 由於獨立性假設只能檢定兩個變數是否相關，無法知道關聯性的強度與方向，因此當檢定結果為顯著相關時，我們便會依據不同的資料型態 (例如：不同大小的列聯表)選擇不同的係數來計算變數之間關聯性的強度與方向：
        * $ϕ$係數 (phi coefficient)：僅適用於2 x 2的列聯表
        * 列聯係數 (coefficient of contingency)：適用於大於2 x 2方陣的列聯表
        * Cramer’s V係數：可用於非方陣列聯表
* 配適度檢定
    * 在進行資料分析前，我們通常希望先了解資料的分佈型態，以便找出最適合的分析方法。此時就可以使用配適度檢定 (或稱適合度檢定)來驗證欲分析的樣本組是否符合某一特定的機率分佈；例如：某醫院病患的血型分佈是否和臺灣人的血型分佈相符
* 同質性檢定
    * 前述兩種卡方檢定的方法，都是用來探討單一樣本組的資料，而同質性檢定則是用來檢定不同樣本組間對於某變數的關聯性是否一致 (例如：檢定抽菸、喝酒及吃檳榔是否都會增加口腔癌的發生機率)
* 改變顯著性：用以檢定同一樣本在事件前後的反應是否有顯著的差異

#### 2. 關聯性檢測
>卡方檢定的 $X^2$ 會隨著樣本大小而改變，樣本愈大，$X^2$ 值越大

* Phi相關：
    * 適用於兩個變項均為二分法之名目變項，例如：性別 也就是2x2列聯表  (X、Y二分法)
* Cramer’s V
    * 名目變數相關性最常用的指標
    * 值介於 `0` 與 `1` 之間 (`0 ≤ V ≤ 1`)
    * 與 `Pearson 相關係數`一樣，數值愈接近 `1` 表示相關愈強
    * 用於比 `2x2` 大的列聯表
    * 係數百分百相關：
        * 相關 = `1`
        * 完全不相關 =  `0`
        * 完全反向 = `-1`
* 列聯相關係數
    * 應用於大於`5x5`以上的列聯表，否則此數值有低估相關性的可能
> 以上三個相關係數是對稱的，不會因列聯表中行與列對調而有所不同  
  
* `Eta`相關
    * 如果兩個變數中一個是名目尺度，另一個為連續變數由不同數值區間所訂出的區間尺度(例如依年齡分為四組)，則選用 `Eta值`，變數為 `名目尺度` vs `區間尺度`
* `McNemar`相關
    * 用於重複試驗，比較前後的差異性是否明顯。例如：同樣一組人前後比較

|   | 適用型態 | 表格大小 | 備註 |
| --- | :---: | :---: | --- |
| Phi相關 | 名目尺度 | `2x2` |兩變數均為`二分法`之`名目尺度`|
| Cramer’s V | 名目尺度 | `大於2x2`<br>`小於5x5` | 值 `0 ≤ V ≤ 1` |
|列聯相關係數 | - |`大於5x5`  |改良 `Phi`|
| `Eta`相關 |  `x`=名目尺度 <br> `y`=區間尺度 | -|- |
| `McNemar`相關 | - | - |用於`重複試驗`，比較前後差異性是否明顯|
|斯皮爾曼等級相關|順序尺度| N/A |當兩個變數中有其一變數是次序變項資料時<br>通常使用在計算兩組等級之間一致的程度|
|皮爾森積差(量化)|區間尺度<br>比例尺度|N/A|1.相關係數介於 `-1` 至 `1` 之間<br>2.係數愈大相關程度愈強，但相關情形的大小與係數大小並不成線性正比<br>相關係數`0.8`比相關係數`0.4`強，但二者之間沒有倍數相關只有強弱相關<br>3. 相關並不代表有因果關係<br>4.相關係數沒有單位，可以進行跨樣本的比較|

<br><br>

## 第八章 相關分析
#### `量化`連續變項之相關係數
* 兩變項間之關係
    * `Pearson 積差`相關係數：
        * 相關係數介於 `-1` 至 `1` 之間
        * 係數愈大相關程度愈強，但相關情形的大小與係數大小並不成線性正比
            * 相關係數 `0.8` 比相關係數 `0.4` 強，但二者之間沒有倍數相關只有強弱相關
        * 相關並不代表有因果關係
        * 相關係數沒有單位，可以進行跨樣本的比較
* 干擾變項下之關係

#### `質化`變項之相關係數
* Phi相關
* Cramer's V
* 列聯相關係數
* Eta 相關
* McNemar 相關
* 點對點二元系列相關
* 斯皮爾曼等級相關
    * 應用於順序變項線性關係之描述，當兩個變數中有任一變數或兩個變數都是次序變項資料時，通常使用在計算兩組等級之間一致的程度，例如兩個評分者評 N 件作品，或同一個人先後兩次評 N 件作品等

<br><br>

## 參考資料
* [F檢定＆T檢定差異](https://blog.csdn.net/zyy160alex5/article/details/9465317)
* [ANOVA 筆記](https://claychen.github.io/2017/02/08/anova/)
* [假設檢定：基本流程總整理](https://mropengate.blogspot.com/2015/03/hypothesis-testing-p-value.html)
* [卡方檢定](http://belleaya.pixnet.net/blog/post/30844198-%5B%E6%95%99%E5%AD%B8%5D-%5B%E7%B5%B1%E8%A8%88%5D-%E5%8D%A1%E6%96%B9%E6%AA%A2%E5%AE%9A-%E5%B0%8F%E7%AD%86%E8%A8%98-%28%E6%9C%AA%E5%AE%8C%29)
* [量化研究與統計分析-變異數分析(ANalysis Of VAriance, ANOVA)](http://qheroq.blogspot.com/2010/10/analysis-of-variance-anova.html)

#### 關於 p 值
* [淺談 p-value 值](http://yenchic-blog.logdown.com/posts/159549-talking-about-the-p-value-p-value)
* [統計學:大家都喜歡問的系列-p值是什麼](https://medium.com/@chih.sheng.huang821/%E7%B5%B1%E8%A8%88%E5%AD%B8-%E5%A4%A7%E5%AE%B6%E9%83%BD%E5%96%9C%E6%AD%A1%E5%95%8F%E7%9A%84%E7%B3%BB%E5%88%97-p%E5%80%BC%E6%98%AF%E4%BB%80%E9%BA%BC-2c03dbe8fddf)
* [统计学假设检验中 p 值的含义具体是什么？](https://www.zhihu.com/question/23149768)
* [統計看嚨嘸之完全退散-假設檢定 與 P 值](http://pcmchus.pixnet.net/blog/post/204165362-%E7%B5%B1%E8%A8%88%E7%9C%8B%E5%9A%A8%E5%98%B8%E4%B9%8B%E5%AE%8C%E5%85%A8%E9%80%80%E6%95%A3----%E5%81%87%E8%A8%AD%E6%AA%A2%E5%AE%9A-%E8%88%87-p-%E5%80%BC)
* [P 值的陷阱（上）：P 值是什麼？又不是什麼](https://pansci.asia/archives/110923)
* [P 值的陷阱（下）：「摘櫻桃」問題](https://pansci.asia/archives/111916)
* [你真的理解p值么? 一句话解释p值的常见误解](https://www.mediecogroup.com/method_topic_article_detail/193/)
* [学统计必看：你真的懂p值吗？](http://www.novopro.cn/articles/201507221201.html)
* [Nature评论：800名科学家联名反对统计学意义，放弃P值“决定论”](https://mp.weixin.qq.com/s/-Zca9g_tt67DO0gt0h2jag)