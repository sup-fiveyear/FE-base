# 基础数据结构

## 字符串

### 警惕时间复杂度

由于字符串和数组是类似的，例如在字符串中间和头部插入或删除一个元素时，需要将后面的元素进行shift操作。

> 从而来保证物理空间的连续性？我没找到资料... 猜的... 勿喷

**所以在处理字符串时，如果通过循环来调API会使得时间复杂度陡然升至n^2。** 不过好在向字符串尾部添加元素时，时间复杂度为O(1)，这一点和数组保持一致。

### 前端常用API

`String.prototype.charAt()`:
返回特定位置的字符。

`Array.prototype.indexOf()`:
从字符串对象中返回首个被发现的给定值的索引值，如果没有找到则返回-1。

`String.prototype.split()`:
通过分离字符串成字串，将字符串对象分割成字符串数组。

`String.prototype.concat()`:
连接两个字符串文本，并返回一个新的字符串。

`String.prototype.slice()`:
摘取一个字符串区域，返回一个新的字符串。

`String.prototype.replace()`:
被用来在正则表达式和字符串直接比较，然后用新的子串来替换被匹配的子串。

`String.prototype.substr()`:
通过指定字符数返回在指定位置开始的字符串中的字符。

`String.prototype.padEnd()`:

在当前字符串尾部填充指定的字符串， 直到达到指定的长度。 返回一个新的字符串。

`String.prototype.padStart()`:

在当前字符串头部填充指定的字符串， 直到达到指定的长度。 返回一个新的字符串。

### ASCII 、 Unicode 以及 utf-8/-16/-32

### 鼻祖题型

无论是从工业界应用，以及算法题的种类来看，最常见、最基础的几种题型有：

- 在字符串中删除指定元素
- 字符串去重
- 字符串替换
- 翻转字符串
- subString搜索 （工业界有很多比较难的算法，例如BF算法（暴力对比、RK算法、BM算法...总之很难...） 

> 举例来说，搜索引擎会将空格转化成20%,除了使用正则表达式，作为软件开发人员的我们，必须能够编写出O(n)时间复杂度的算法，而不是在一个for循环中调API，让时间复杂度上升到n^2.
