(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{499:function(t,v,a){"use strict";a.r(v);var _=a(4),e=Object(_.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《javascript高级程序设计》学习过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《javascript高级程序设计》学习过程"}},[t._v("#")]),t._v(" 《JavaScript高级程序设计》学习过程")]),t._v(" "),a("h3",{attrs:{id:"_4、变量、作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、变量、作用域"}},[t._v("#")]),t._v(" 4、变量、作用域")]),t._v(" "),a("ul",[a("li",[t._v("基本类型\n"),a("ul",[a("li",[t._v("Undefined")]),t._v(" "),a("li",[t._v("Null")]),t._v(" "),a("li",[t._v("Boolean")]),t._v(" "),a("li",[t._v("Number .toFixed(2)保留两位 toExponential()e表示法")]),t._v(" "),a("li",[t._v("String")])])])]),t._v(" "),a("blockquote",[a("ul",[a("li",[a("blockquote",[a("p",[t._v("基本类型保存在栈内存中，引用类型的值是对象，保存在堆内存。")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("可以为变量添加属性,不能给基本属性类型的值添加属性，这样不会导致错误。\n复制变量,var num2=num1,num1和num2独立，没有任何关系。\nJavaScript没有块级作用域，例如if、for语句中的变量或者for i=0的i，会将变量添加到当前执行环境，全局环境中。如果在函数中声明var，则会自动添加到最近的环境中（函数局部环境）外不就获取不到，如果没有var，则会被获取。\n局部环境中存在同名标志符，就不会使用父环境中的标识符。")])])]),t._v(" "),a("ul",[a("li",[t._v("= =运算符称作相等，用来zd检测两个操作数是否相等，这里的相等定义的非常宽松，可以允许进行类型转换。===：用来检测两个操作数是否严格相等。\n"),a("ul",[a("li",[t._v("1、对于string,number等基础类型，==和= ==是有区别的。")]),t._v(" "),a("li",[t._v("2、对于Array,Object等高级类型，==和= ==是没有区别的。")]),t._v(" "),a("li",[t._v("3、基础类型与高级类型，==和= ==是有区别的。")])])])]),t._v(" "),a("h4",{attrs:{id:"垃圾收集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#垃圾收集"}},[t._v("#")]),t._v(" 垃圾收集")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("标记清除（很常用）")]),t._v(" "),a("blockquote",[a("p",[t._v("进入环境，标记“进入环境”，函数变量执行结束，标记“离开环境”。")])])]),t._v(" "),a("li",[a("p",[t._v("引用计数")]),t._v(" "),a("blockquote",[a("p",[t._v("引用一次+1，如果为0就回收，会造成内存爆炸。")])])]),t._v(" "),a("li",[a("p",[t._v("管理内存")]),t._v(" "),a("blockquote",[a("p",[t._v("将全局变量、对象赋值null来解除引用。")])])])]),t._v(" "),a("h3",{attrs:{id:"_5、引用类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、引用类型"}},[t._v("#")]),t._v(" 5、引用类型")]),t._v(" "),a("h4",{attrs:{id:"object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[t._v("#")]),t._v(" Object")]),t._v(" "),a("ul",[a("li",[t._v("实例类型表示")])]),t._v(" "),a("ul",[a("li",[a("blockquote",[a("p",[t._v('var peson=new Object();\nperson.name="ckf";\npeson.age=20;')])])]),t._v(" "),a("li",[a("blockquote",[a("p",[t._v('var person={\n  name:"ckf",\n  age:209\n};')])])]),t._v(" "),a("li",[a("blockquote",[a("p",[t._v('person ["name"] === person.name ;')])])])]),t._v(" "),a("h4",{attrs:{id:"array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#array"}},[t._v("#")]),t._v(" Array")]),t._v(" "),a("p",[t._v("数组大小可以动态申请，添加自动增长")]),t._v(" "),a("ul",[a("li",[t._v("数组创建")])]),t._v(" "),a("ul",[a("li",[a("blockquote",[a("p",[t._v("var color=new Array(3);(创建包含3项的数组)\nvar n=new Array(\"ckf\");创建好汉1项，即ckf\nvar colors=['1','2','3'] (推荐这样)\nvar colors=[,,,,,,];会导致不同浏览器 产生不同的个数  不能用\n可以去掉new,可以修改长度，自动移除，和增加长度。(.length(3)，也不要用)")])])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("转化方法")]),t._v(" "),a("ul",[a("li",[t._v("所有对象都具有 toLocaleString()、toString()、valueOf()")]),t._v(" "),a("li",[t._v("toString() 隐式调用、会自动调用")]),t._v(" "),a("li",[t._v("toLocaleString()可能在数字和时间格式上有差别")]),t._v(" "),a("li",[t._v("使用.join('|')可以改变分隔符")])])]),t._v(" "),a("li",[a("p",[t._v("栈方法")]),t._v(" "),a("ul",[a("li",[a("blockquote",[a("p",[t._v("var colors=new Array();\ncolors.push('red','green');\ncolors[2]='black';\ncolors.pop();\n以上数组可以看成栈,本质数组")])])])])]),t._v(" "),a("li",[a("p",[t._v("队列")]),t._v(" "),a("ul",[a("li",[a("blockquote",[a("p",[t._v("var colors=new Array();\ncolors.push('red','green');"),a("br"),t._v("\ncolors.shift();获取第一项.")])])])])]),t._v(" "),a("li",[a("p",[t._v("重排序")]),t._v(" "),a("ul",[a("li",[t._v(".reverse();反转数组")]),t._v(" "),a("li",[t._v(".sort();但是会调用每一个toString（）来比较字符串。\n.sort(compare)编写compare函数可以指定表函数。")])])]),t._v(" "),a("li",[a("p",[t._v("操作方法")]),t._v(" "),a("ul",[a("li",[t._v(".concat()添加新的数组")]),t._v(" "),a("li",[t._v(".splice(0,2)删除 也算是一种获取 0-1的值")]),t._v(" "),a("li",[t._v(".splice(2,0,'red');在第二个位置插入 不删除")]),t._v(" "),a("li",[t._v(".splice(2,1,'red');在第二个位置插入 先删除第二个")])])]),t._v(" "),a("li",[a("p",[t._v("位置方法")]),t._v(" "),a("ul",[a("li",[t._v(".indexOf();获取位置\n.lastIndexOf()从后往前")])])]),t._v(" "),a("li",[a("p",[t._v("迭代方法")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("every()每一项满足 返回true 否则false")]),t._v(" "),a("blockquote",[a("p",[t._v("var every=numbers.every(function(item,index,array){\nreturn item>2;\n});")])])]),t._v(" "),a("li",[a("p",[t._v("filter() 返回满足true的项的数组;")])]),t._v(" "),a("li",[a("p",[t._v("forEach() 循环 没有返回值;")])]),t._v(" "),a("li",[a("p",[t._v("map() 返回每次函数调用的结果组成的数组")])]),t._v(" "),a("li",[a("p",[t._v("some() 有一项则返回true")])])])])]),t._v(" "),a("h4",{attrs:{id:"date类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date类型"}},[t._v("#")]),t._v(" Date类型")]),t._v(" "),a("h4",{attrs:{id:"regexp-正则表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regexp-正则表达式"}},[t._v("#")]),t._v(" RegExp 正则表达式")]),t._v(" "),a("ul",[a("li",[t._v("支持正则表达式的接口")])]),t._v(" "),a("h4",{attrs:{id:"function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#function"}},[t._v("#")]),t._v(" function")]),t._v(" "),a("h4",{attrs:{id:"string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" String")]),t._v(" "),a("ul",[a("li",[t._v("方法")])]),t._v(" "),a("ul",[a("li",[t._v(".chartAt()返回字符")]),t._v(" "),a("li",[t._v(".charCodeAt()返回字符编号")]),t._v(" "),a("li",[t._v("[1]方括号加索引")]),t._v(" "),a("li",[t._v(".concat(‘asd’) 拼接\n不会修改字符串本身.substring()负值=0、slice()、substr()")]),t._v(" "),a("li",[t._v(".trim()删除前置和后 缀的空格")]),t._v(" "),a("li",[t._v(".toLocalUpperCase()大写Local(地区)")]),t._v(" "),a("li",[t._v(".toUpperCase()")])]),t._v(" "),a("h4",{attrs:{id:"global对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global对象"}},[t._v("#")]),t._v(" Global对象")]),t._v(" "),a("ul",[a("li",[t._v("encodeURI() 对于整个URI进行编码，不会对冒号、正斜杆、问号、井字")]),t._v(" "),a("li",[t._v("encoudeURIComponent()更多 会进行")])]),t._v(" "),a("h4",{attrs:{id:"eval-方法-可能造成代码注入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eval-方法-可能造成代码注入"}},[t._v("#")]),t._v(" eval()方法 可能造成代码注入")]),t._v(" "),a("h4",{attrs:{id:"math对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#math对象"}},[t._v("#")]),t._v(" Math对象")]),t._v(" "),a("ul",[a("li",[t._v("min()、max()方法")]),t._v(" "),a("li",[t._v("舍入")])]),t._v(" "),a("ul",[a("li",[t._v("Math.ceil()向上舍入 最接近的数值")]),t._v(" "),a("li",[t._v("Math.round()四舍五入")]),t._v(" "),a("li",[t._v("Math.floor()向下舍入")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("random()方法")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("介于0-1之间")])]),t._v(" "),a("li",[a("blockquote",[a("p",[t._v("以下是 包括 边界值的函数代码\nfunction selectFrom(low,upper){\nvar c=upper-low+1;\nreturn Math.floor(Math.random()*c+low);\n}")])])])])])]),t._v(" "),a("h3",{attrs:{id:"_6、面向对象程序设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、面向对象程序设计"}},[t._v("#")]),t._v(" 6、面向对象程序设计")]),t._v(" "),a("h4",{attrs:{id:"理解对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#理解对象"}},[t._v("#")]),t._v(" 理解对象")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('>var person = {\n        name: "caolaofam",\n        age: 29,\n        getName: function () {\n            alert(this.name);\n        }\n    };\n    console.log(person);\n    person.getName();\n')])])]),a("h4",{attrs:{id:"数据的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据的属性"}},[t._v("#")]),t._v(" 数据的属性")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("属性")]),t._v(" "),a("ul",[a("li",[t._v("configurable，能否通过delete删除属性，或者重新定义。")]),t._v(" "),a("li",[t._v("enumerable 是否能通过for-in循环返回属性")]),t._v(" "),a("li",[t._v("Writable 能否修改属性的值")]),t._v(" "),a("li",[t._v("value  这个属性的数据。")])])]),t._v(" "),a("li",[a("p",[t._v("访问器属性")]),t._v(" "),a("ul",[a("li",[t._v("get")]),t._v(" "),a("li",[t._v("set 都是自动调用的")])])]),t._v(" "),a("li",[a("p",[t._v("定义多个数据属性")]),t._v(" "),a("ul",[a("li",[t._v("Object.defineProperties()")])])])]),t._v(" "),a("h4",{attrs:{id:"创建对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建对象"}},[t._v("#")]),t._v(" 创建对象")]),t._v(" "),a("ul",[a("li",[t._v("工厂模式\n能解决创建相似对象的问题，但是无法识别对象")]),t._v(" "),a("li",[t._v("构造函数模式")]),t._v(" "),a("li",[t._v("原型模式\n使用prototype属性来指定那些属性和方法")]),t._v(" "),a("li",[t._v("构造和原型混用")]),t._v(" "),a("li",[t._v("动态原型模式")]),t._v(" "),a("li",[t._v("寄生构造函数模式")])]),t._v(" "),a("h4",{attrs:{id:"继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[t._v("#")]),t._v(" 继承")]),t._v(" "),a("ul",[a("li",[t._v("原型链")])]),t._v(" "),a("h2",{attrs:{id:"_7、函数表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、函数表达式"}},[t._v("#")]),t._v(" 7、函数表达式")]),t._v(" "),a("ul",[a("li",[t._v("函数体 function gName(arg){}")]),t._v(" "),a("li",[t._v("函数表达式 var name=function（arg）{}")]),t._v(" "),a("li",[t._v("递归函数\n使用arguments.callee来指向正在执行的函数的指针")])]),t._v(" "),a("h4",{attrs:{id:"闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("指有权访问另一个函数作用域中的变量的函数")]),t._v(" "),a("blockquote",[a("p",[t._v("for(var i=0,len=nodes.length;i<len;i++>){\n(function(i){\nnode[i].onclick=function(){\nconsole.log(i);\n}\n})(i)\n}")])])])]),t._v(" "),a("h4",{attrs:{id:"this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this"}},[t._v("#")]),t._v(" this")]),t._v(" "),a("ul",[a("li",[t._v("基于运行环境绑定的，全局函数中this等于window，匿名函数具有全局性的运行环境。")])]),t._v(" "),a("h2",{attrs:{id:"_8、bom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、bom"}},[t._v("#")]),t._v(" 8、BOM")]),t._v(" "),a("h4",{attrs:{id:"window对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window对象"}},[t._v("#")]),t._v(" window对象")]),t._v(" "),a("ul",[a("li",[t._v("BOM核心对象是window，即是JavaScript访问浏览器窗口的接口，也是Global对象")]),t._v(" "),a("li",[t._v("全局变量不能通过delete删除 而window对象定义的属性可以")]),t._v(" "),a("li",[t._v("窗口位置\n"),a("ul",[a("li",[t._v("screenLeft、screenTop")]),t._v(" "),a("li",[t._v("moveTo()移动到固定位置 方法有些游览器禁用")])])]),t._v(" "),a("li",[t._v("窗口大小")]),t._v(" "),a("li",[t._v("超时调用\nsetTimeout(function()，1000)")]),t._v(" "),a("li",[t._v("间歇调用\nsetInterval(function(),1000)")])]),t._v(" "),a("h4",{attrs:{id:"location对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location对象"}},[t._v("#")]),t._v(" location对象")]),t._v(" "),a("ul",[a("li",[t._v("既是window对象的属性也是document对象的属性")]),t._v(" "),a("li",[t._v("属性\n"),a("ul",[a("li",[t._v("host服务器名+端口号")]),t._v(" "),a("li",[t._v("href完整URL")]),t._v(" "),a("li",[t._v("search 返回?name=ckf&age=21 此方法可以获取URL所有的参数")])])]),t._v(" "),a("li",[t._v("位置操作\n"),a("ul",[a("li",[t._v('location.href="www.baidu.com";')]),t._v(" "),a("li",[t._v('window.location="www.baidu.com";')])])])]),t._v(" "),a("h4",{attrs:{id:"navigator对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#navigator对象"}},[t._v("#")]),t._v(" navigator对象")]),t._v(" "),a("h4",{attrs:{id:"history对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#history对象"}},[t._v("#")]),t._v(" history对象")]),t._v(" "),a("h2",{attrs:{id:"_9、客户端检测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9、客户端检测"}},[t._v("#")]),t._v(" 9、客户端检测")]),t._v(" "),a("ul",[a("li",[t._v("能力检测 最好使用，检测是否游览器有这个功能")]),t._v(" "),a("li",[t._v("怪癖检查")]),t._v(" "),a("li",[t._v("用户代理检测")])]),t._v(" "),a("h2",{attrs:{id:"_10、dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10、dom"}},[t._v("#")]),t._v(" 10、DOM")]),t._v(" "),a("h4",{attrs:{id:"节点层次"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#节点层次"}},[t._v("#")]),t._v(" 节点层次")]),t._v(" "),a("h6",{attrs:{id:"node（最基本的节点类型）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node（最基本的节点类型）"}},[t._v("#")]),t._v(" Node（最基本的节点类型）")]),t._v(" "),a("ul",[a("li",[t._v("每个都有ChildNodes")]),t._v(" "),a("li",[t._v("方法\n+   .indertBefore()\n+   .replaceChild()\n+   .appendChild()")])]),t._v(" "),a("h6",{attrs:{id:"document（根节点）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document（根节点）"}},[t._v("#")]),t._v(" Document（根节点）")]),t._v(" "),a("ul",[a("li",[t._v("查找元素\n"),a("ul",[a("li",[t._v("getElementById()获取元素的ID 只返回第一次出现")]),t._v(" "),a("li",[t._v("getElementsByTagName()获取元素标签名")])])])]),t._v(" "),a("h6",{attrs:{id:"element（所有html或者xml元素）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element（所有html或者xml元素）"}},[t._v("#")]),t._v(" Element（所有HTML或者XML元素）")]),t._v(" "),a("ul",[a("li",[t._v(".getAttribute('class')获取对象的特性 也可以获取自定义特性")]),t._v(" "),a("li",[t._v(".setAttribute('class',\"CLass\") 设置对象的特性")]),t._v(" "),a("li",[t._v(".removeAttribute('class')直接移除class属性")]),t._v(" "),a("li",[t._v(".childNodes 子节点")])]),t._v(" "),a("h6",{attrs:{id:"text类型（文本节点）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text类型（文本节点）"}},[t._v("#")]),t._v(" Text类型（文本节点）")]),t._v(" "),a("h6",{attrs:{id:"comment-注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comment-注释"}},[t._v("#")]),t._v(" Comment(注释)")]),t._v(" "),a("h6",{attrs:{id:"cdatasection类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdatasection类型"}},[t._v("#")]),t._v(" CDATASection类型")]),t._v(" "),a("h6",{attrs:{id:"documenttype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documenttype"}},[t._v("#")]),t._v(" DocumentType")]),t._v(" "),a("h6",{attrs:{id:"documentfragment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documentfragment"}},[t._v("#")]),t._v(" DocumentFragment")]),t._v(" "),a("ul",[a("li",[t._v("继承Node所有的方法，它可以添加或删除，但是文档片段本身不会成为文档树的一部分")])]),t._v(" "),a("h6",{attrs:{id:"attr类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attr类型"}},[t._v("#")]),t._v(" Attr类型")]),t._v(" "),a("h4",{attrs:{id:"动态操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态操作"}},[t._v("#")]),t._v(" 动态操作")]),t._v(" "),a("ul",[a("li",[t._v("动态加载脚本\n"),a("ul",[a("li",[t._v("IE不能使用document.createTextNode(coode) //往新建script脚本中添加\n必须使用script.text=code;")])])]),t._v(" "),a("li",[t._v("动态样式\n"),a("ul",[a("li",[t._v('IE不能也不能直接创建Style节点，必须使用style.styleSgeet.cssText=""')])])]),t._v(" "),a("li",[t._v("操作表格")]),t._v(" "),a("li",[t._v("NodeList\n"),a("ul",[a("li",[t._v("获取所有div")])])])]),t._v(" "),a("h2",{attrs:{id:"_11、dom扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11、dom扩展"}},[t._v("#")]),t._v(" 11、DOM扩展")]),t._v(" "),a("h4",{attrs:{id:"选择符api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择符api"}},[t._v("#")]),t._v(" 选择符API")]),t._v(" "),a("ul",[a("li",[t._v("querySelector();可以是标签名、类型、ID名、类型名 都是返回第一个")]),t._v(" "),a("li",[t._v("querySelectorAll(); 所有")]),t._v(" "),a("li",[t._v("matchesSelector();在获取某个元素引用下 能检测是否会被上面两个方法返回")])]),t._v(" "),a("h4",{attrs:{id:"元素遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元素遍历"}},[t._v("#")]),t._v(" 元素遍历")]),t._v(" "),a("ul",[a("li",[t._v("childElementCount 子元素个数")]),t._v(" "),a("li",[t._v("firstElementChild 第一个子元素")]),t._v(" "),a("li",[t._v("last...")]),t._v(" "),a("li",[t._v("previousElementsSibling 前一个同辈元素")]),t._v(" "),a("li",[t._v("nextElementSibling 指向后一个同辈元素")])]),t._v(" "),a("h4",{attrs:{id:"html5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html5"}},[t._v("#")]),t._v(" HTML5")]),t._v(" "),a("ul",[a("li",[t._v("getElementsByClassName()获取元素类")]),t._v(" "),a("li",[t._v("classList属性\n"),a("ul",[a("li",[t._v("add")]),t._v(" "),a("li",[t._v("contains")]),t._v(" "),a("li",[t._v("remove")]),t._v(" "),a("li",[t._v("toggle如果前面存在删除 添加")])])])]),t._v(" "),a("h6",{attrs:{id:"焦点管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#焦点管理"}},[t._v("#")]),t._v(" 焦点管理")]),t._v(" "),a("ul",[a("li",[t._v(".focus()")]),t._v(" "),a("li",[t._v(".activeElement 状态")]),t._v(" "),a("li",[t._v(".hasfocus()是否获取焦点")])]),t._v(" "),a("h4",{attrs:{id:"htmldocument"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#htmldocument"}},[t._v("#")]),t._v(" HTMLDocument")]),t._v(" "),a("ul",[a("li",[t._v("最早采用readyState属性 检测是否加载完成页面")]),t._v(" "),a("li",[t._v("兼容模式")]),t._v(" "),a("li",[t._v("head属性document.head")]),t._v(" "),a("li",[t._v('字符集属性document.charset="UTF-8"。可以通过'),a("meta"),t._v("元素、响应头部直接、修改charset。")]),t._v(" "),a("li",[t._v("自定义数据属性 前缀名data-，任意添加随意命名\ndiv.dataset.myname")])]),t._v(" "),a("h4",{attrs:{id:"插入标记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插入标记"}},[t._v("#")]),t._v(" 插入标记")]),t._v(" "),a("ul",[a("li",[t._v("innerHTML属性  不包括div本身 在插入script标签（IE8）可以使用")]),t._v(" "),a("li",[t._v("outerHTML属性  包括div本身")]),t._v(" "),a("li",[t._v("insertAdjacentHTML()方法\n"),a("ul",[a("li",[t._v("beforebegin 在当前元素前面插入同辈元素")]),t._v(" "),a("li",[t._v("afterbegin  第一个元素")]),t._v(" "),a("li",[t._v("beforeend   最后一个")]),t._v(" "),a("li",[t._v("afterend    后面插入一个")])])])]),t._v(" "),a("h4",{attrs:{id:"性能问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能问题"}},[t._v("#")]),t._v(" 性能问题")]),t._v(" "),a("ul",[a("li",[t._v("替换子节点可能会导致内存占用问题，最好再删除一个对象树时，应该先删除事件处理绑事件")]),t._v(" "),a("li",[t._v("如果重复添加多个 div 应该先一次性写到变量当中，再添加")])]),t._v(" "),a("h4",{attrs:{id:"scrollintoview-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scrollintoview-方法"}},[t._v("#")]),t._v(" scrollIntoView()方法")]),t._v(" "),a("h4",{attrs:{id:"专有扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#专有扩展"}},[t._v("#")]),t._v(" 专有扩展")]),t._v(" "),a("h6",{attrs:{id:"文档模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档模式"}},[t._v("#")]),t._v(" 文档模式")]),t._v(" "),a("ul",[a("li",[t._v("决定能使用哪个级别的css、js中使用哪些api")])]),t._v(" "),a("h6",{attrs:{id:"children"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#children"}},[t._v("#")]),t._v(" children")]),t._v(" "),a("ul",[a("li",[t._v("和childrenNodes没什么区别")])]),t._v(" "),a("h6",{attrs:{id:"contains-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contains-方法"}},[t._v("#")]),t._v(" contains()方法")]),t._v(" "),a("ul",[a("li",[t._v("是否是某个节点的 子节点")])]),t._v(" "),a("h6",{attrs:{id:"innertext属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#innertext属性"}},[t._v("#")]),t._v(" innerText属性")]),t._v(" "),a("ul",[a("li",[t._v("删除原先的所有子节点！")]),t._v(" "),a("li",[t._v("textCOntent类似")]),t._v(" "),a("li",[t._v("outerText 还会替换本身")])]),t._v(" "),a("h6",{attrs:{id:"滚动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#滚动"}},[t._v("#")]),t._v(" 滚动")]),t._v(" "),a("p",[t._v("scrollIntoViewIfNeeded 如果元素不可见 就让他可见")]),t._v(" "),a("h2",{attrs:{id:"_12、dom2和dom3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12、dom2和dom3"}},[t._v("#")]),t._v(" 12、DOM2和DOM3")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Document类型变化")]),t._v(" "),a("ul",[a("li",[t._v("createElementNS（），给定tagName创建一个新元素")]),t._v(" "),a("li",[t._v("createAttributeNS（），给定attributeName")]),t._v(" "),a("li",[t._v("getElementsByTagNameNS()")])])]),t._v(" "),a("li",[a("p",[t._v("Element类型变化")]),t._v(" "),a("ul",[a("li",[t._v("getAttributeNs()，取得属于命名空间namespaceURI且名为localName特性")]),t._v(" "),a("li",[t._v("getAttributeNodesNs()取得属于命名空间namespaceURI且名为localName的特性节点")]),t._v(" "),a("li",[t._v("getELementsByTagNameNS()")])])]),t._v(" "),a("li",[a("p",[t._v("...")])]),t._v(" "),a("li",[a("p",[t._v("样式")]),t._v(" "),a("ul",[a("li",[t._v("访问元素样式")]),t._v(" "),a("li",[t._v("操作样式表")]),t._v(" "),a("li",[t._v("元素大小\n"),a("ul",[a("li",[t._v("offsetHight 元素在垂直方向上占用大小")]),t._v(" "),a("li",[t._v("offsetWidth 水平")]),t._v(" "),a("li",[t._v("offsetLeft  左边框至含元素左边框的距离")]),t._v(" "),a("li",[t._v("offsetTop   上边框")])])]),t._v(" "),a("li",[t._v("滚动大小\n"),a("ul",[a("li",[t._v("scrollHeight    没有滚动条情况下，元素高度")]),t._v(" "),a("li",[t._v("scrollWidth     圆度宽度")]),t._v(" "),a("li",[t._v("scrollLeft      被隐藏的左侧像素")]),t._v(" "),a("li",[t._v("scrollTop       被隐藏的上侧")])])])])]),t._v(" "),a("li",[a("p",[t._v("遍历")]),t._v(" "),a("ul",[a("li",[t._v("Nodeliterator")]),t._v(" "),a("li",[t._v("TreeWalker\nnextSibling返回节点之后的兄弟节点 包括本文节点、注释节点")])])]),t._v(" "),a("li",[a("p",[t._v("范围")])])]),t._v(" "),a("h2",{attrs:{id:"_13、事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13、事件"}},[t._v("#")]),t._v(" 13、事件")]),t._v(" "),a("h4",{attrs:{id:"事件流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件流"}},[t._v("#")]),t._v(" 事件流")]),t._v(" "),a("h6",{attrs:{id:"事件冒泡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件冒泡"}},[t._v("#")]),t._v(" 事件冒泡")]),t._v(" "),a("ul",[a("li",[t._v("点击页面div元素 click事件会沿DOM树向上传播")])]),t._v(" "),a("h6",{attrs:{id:"事件捕获"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件捕获"}},[t._v("#")]),t._v(" 事件捕获")]),t._v(" "),a("ul",[a("li",[t._v("点击页面div元素 click事件会沿DOM树向下传播")])]),t._v(" "),a("h4",{attrs:{id:"事件处理程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件处理程序"}},[t._v("#")]),t._v(" 事件处理程序")]),t._v(" "),a("h6",{attrs:{id:"html指定事件处理程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html指定事件处理程序"}},[t._v("#")]),t._v(" HTML指定事件处理程序")]),t._v(" "),a("ul",[a("li",[t._v('onclick="function()"')])]),t._v(" "),a("h6",{attrs:{id:"dom0级事件处理程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom0级事件处理程序"}},[t._v("#")]),t._v(" DOM0级事件处理程序")]),t._v(" "),a("ul",[a("li",[t._v("btn.onclick=function(){}")])]),t._v(" "),a("h6",{attrs:{id:"dom2级事件处理程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom2级事件处理程序"}},[t._v("#")]),t._v(" DOM2级事件处理程序")]),t._v(" "),a("ul",[a("li",[t._v('添加了addEventListener("click",function,boolean)和removeEventListener()')]),t._v(" "),a("li",[t._v("三个参数：处理的事件名、函数、布尔值（true捕获阶段调用 ，false冒泡阶段）")]),t._v(" "),a("li",[t._v("删除不了匿名函数")])]),t._v(" "),a("h6",{attrs:{id:"ie事件处理程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ie事件处理程序"}},[t._v("#")]),t._v(" IE事件处理程序")]),t._v(" "),a("ul",[a("li",[t._v('attactEvent("onclick",boolean)和detachEvent()')]),t._v(" "),a("li",[t._v("作用域是全局")])]),t._v(" "),a("h6",{attrs:{id:"跨游览器的事件处理程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨游览器的事件处理程序"}},[t._v("#")]),t._v(" 跨游览器的事件处理程序")]),t._v(" "),a("ul",[a("li",[t._v("封装一个EventUtil类")])]),t._v(" "),a("h4",{attrs:{id:"事件对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件对象"}},[t._v("#")]),t._v(" 事件对象")]),t._v(" "),a("h6",{attrs:{id:"dom中的事件对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom中的事件对象"}},[t._v("#")]),t._v(" DOM中的事件对象")]),t._v(" "),a("ul",[a("li",[t._v("都会将一个event对象传入到事件处理中，this===event.currentTarget")]),t._v(" "),a("li",[t._v("event.preventDefault()阻止事件的默认行为")])]),t._v(" "),a("h6",{attrs:{id:"ie中的事件对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ie中的事件对象"}},[t._v("#")]),t._v(" IE中的事件对象")]),t._v(" "),a("ul",[a("li",[t._v("event是以window对象的一个属性存在")]),t._v(" "),a("li",[t._v("returnValue属性相当于preventDefault()")])]),t._v(" "),a("h6",{attrs:{id:"跨游览器的事件对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨游览器的事件对象"}},[t._v("#")]),t._v(" 跨游览器的事件对象")]),t._v(" "),a("h4",{attrs:{id:"事件类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件类型"}},[t._v("#")]),t._v(" 事件类型")]),t._v(" "),a("h6",{attrs:{id:"ui事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui事件"}},[t._v("#")]),t._v(" UI事件")]),t._v(" "),a("ul",[a("li",[t._v("load，页面完全加载后在window上触发、框架加载完成后触发、图像加载后触发")]),t._v(" "),a("li",[t._v("unload，卸载")]),t._v(" "),a("li",[t._v("select，选择文本框中的一个或多个字符触发")]),t._v(" "),a("li",[t._v("scroll，用户滚动带时")])]),t._v(" "),a("h6",{attrs:{id:"焦点事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#焦点事件"}},[t._v("#")]),t._v(" 焦点事件")]),t._v(" "),a("ul",[a("li",[t._v("foucs 获得")]),t._v(" "),a("li",[t._v("blur 失去")])]),t._v(" "),a("h6",{attrs:{id:"鼠标和滚轮事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#鼠标和滚轮事件"}},[t._v("#")]),t._v(" 鼠标和滚轮事件")]),t._v(" "),a("ul",[a("li",[t._v("click")]),t._v(" "),a("li",[t._v("dblclick 双击鼠标")]),t._v(" "),a("li",[t._v("mousedown 任意鼠标按钮")]),t._v(" "),a("li",[t._v("mouseenter 鼠标进入")]),t._v(" "),a("li",[t._v("mouseleave")]),t._v(" "),a("li",[t._v("mousemove 在内部移动时重复触发")]),t._v(" "),a("li",[t._v("mouseout")]),t._v(" "),a("li",[t._v("mouseup 鼠标按钮释放时触发")]),t._v(" "),a("li",[t._v("mousewheel滚轮事件")])]),t._v(" "),a("h6",{attrs:{id:"键盘和文本事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#键盘和文本事件"}},[t._v("#")]),t._v(" 键盘和文本事件")]),t._v(" "),a("h6",{attrs:{id:"复合事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复合事件"}},[t._v("#")]),t._v(" 复合事件")]),t._v(" "),a("h6",{attrs:{id:"变动事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变动事件"}},[t._v("#")]),t._v(" 变动事件")]),t._v(" "),a("h6",{attrs:{id:"html5事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html5事件"}},[t._v("#")]),t._v(" HTML5事件")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("contextmenu事件")])]),t._v(" "),a("li",[a("p",[t._v("beforeunload事件")])]),t._v(" "),a("li",[a("p",[t._v("DOMContentLoaded事件  DOM树形成后触发  不会处理图像、js、css")])]),t._v(" "),a("li",[a("p",[t._v("readystatechange")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("uninitialized未初始化")])]),t._v(" "),a("li",[a("p",[t._v("loading 正在加载")])]),t._v(" "),a("li",[a("p",[t._v("loaded 加载完毕")])]),t._v(" "),a("li",[a("p",[t._v("interactive可以操作对象 但还没完全加载")])]),t._v(" "),a("li",[a("p",[t._v("complete 完成")])]),t._v(" "),a("li",[a("blockquote",[a("p",[t._v("document.addEventListener('readystatechange', function (event) {\nif (document.readyState == 'complete') {\nconsole.log('加载完成');\n}\n});\n外部js和css loaded和complete都可以表示完成")])])])])])]),t._v(" "),a("h6",{attrs:{id:"设备事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备事件"}},[t._v("#")]),t._v(" 设备事件")]),t._v(" "),a("ul",[a("li",[t._v("orientationchange事件  改变设备的查看模式 就能触发 手机旋转")]),t._v(" "),a("li",[t._v("MozOrientation事件")])]),t._v(" "),a("h4",{attrs:{id:"内存和性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存和性能"}},[t._v("#")]),t._v(" 内存和性能")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("可以利用事件委托技术")]),t._v(" "),a("blockquote",[a("p",[t._v("var list = document.getElementById('hui');\nlist.addEventListener('click', function (event) {\nconsole.log(event.target.id);\nswitch(event.target.id){\ncase '':\n}\n});")])])]),t._v(" "),a("li",[a("p",[t._v("移除事件处理程序\n在删除一个button之前先把他的onclick=null；")])])]),t._v(" "),a("h4",{attrs:{id:"模拟事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟事件"}},[t._v("#")]),t._v(" 模拟事件")]),t._v(" "),a("h2",{attrs:{id:"_14、表单事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14、表单事件"}},[t._v("#")]),t._v(" 14、表单事件")]),t._v(" "),a("h4",{attrs:{id:"表单基础知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表单基础知识"}},[t._v("#")]),t._v(" 表单基础知识")]),t._v(" "),a("ul",[a("li",[t._v('input和button都可以 将type="submit"')]),t._v(" "),a("li",[t._v(".preventDefault();")]),t._v(" "),a("li",[t._v(".submit();")]),t._v(" "),a("li",[t._v(".reset();")])]),t._v(" "),a("h4",{attrs:{id:"文本框脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文本框脚本"}},[t._v("#")]),t._v(" 文本框脚本")]),t._v(" "),a("ul",[a("li",[t._v(".select()全选")]),t._v(" "),a("li",[t._v(".selectionStart和.selectionEnd,text.value.substring(前面两个); IE8之后")]),t._v(" "),a("li",[t._v("document.selection.createRange().text; IE8以前")]),t._v(" "),a("li",[t._v("过滤输入")]),t._v(" "),a("li",[t._v("操作剪贴板")]),t._v(" "),a("li",[t._v("必填字段 input指定required")]),t._v(" "),a("li",[t._v("pattern")])]),t._v(" "),a("h4",{attrs:{id:"表单序列化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表单序列化"}},[t._v("#")]),t._v(" 表单序列化")]),t._v(" "),a("ul",[a("li",[t._v("对表单的名字和值进行URL编码，使用&分割")]),t._v(" "),a("li",[t._v("不发送金庸、reset、button")]),t._v(" "),a("li",[t._v("发送勾选的复选框和单选")])]),t._v(" "),a("h2",{attrs:{id:"_16、html5脚本编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16、html5脚本编程"}},[t._v("#")]),t._v(" 16、HTML5脚本编程")]),t._v(" "),a("h4",{attrs:{id:"跨文档消息传递"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨文档消息传递"}},[t._v("#")]),t._v(" 跨文档消息传递")]),t._v(" "),a("ul",[a("li",[t._v("XDM")])]),t._v(" "),a("h2",{attrs:{id:"_17、错误处理与调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17、错误处理与调试"}},[t._v("#")]),t._v(" 17、错误处理与调试")]),t._v(" "),a("h4",{attrs:{id:"游览器报告错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#游览器报告错误"}},[t._v("#")]),t._v(" 游览器报告错误")]),t._v(" "),a("h4",{attrs:{id:"错误处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误处理"}},[t._v("#")]),t._v(" 错误处理")]),t._v(" "),a("ul",[a("li",[t._v("try-catch")]),t._v(" "),a("li",[t._v("抛出错误")]),t._v(" "),a("li",[t._v("错误事件")]),t._v(" "),a("li",[t._v("常见的错误类型\n"),a("ul",[a("li",[t._v("Error基类")]),t._v(" "),a("li",[t._v("EvalError 在使用eval（）函数异常被抛出，new eval()和 eval=foo")]),t._v(" "),a("li",[t._v("RangeError 数值超出范围，数组")]),t._v(" "),a("li",[t._v("ReferenceError 找不到对象的情况下出现")]),t._v(" "),a("li",[t._v("SyntaxError 吧语法错误的字符串传入eval()")]),t._v(" "),a("li",[t._v("TypeError 不存在方法、变量保存意外的类型")])])]),t._v(" "),a("li",[t._v("错误类型\n"),a("ul",[a("li",[t._v("类型转化错误")]),t._v(" "),a("li",[t._v("数据类型错误")]),t._v(" "),a("li",[t._v("通信错误")])])]),t._v(" "),a("li",[t._v("把错误记录到服务器")])]),t._v(" "),a("h2",{attrs:{id:"_18、javascript与xml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_18、javascript与xml"}},[t._v("#")]),t._v(" 18、JavaScript与XML")]),t._v(" "),a("h4",{attrs:{id:"浏览器对xml-dom的支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器对xml-dom的支持"}},[t._v("#")]),t._v(" 浏览器对XML DOM的支持")]),t._v(" "),a("ul",[a("li",[t._v("可以创建一个新的、文档元素为< root >的XML文档，一般很少使用")]),t._v(" "),a("li",[t._v("解析XML为DOM文档，DOMParser类型")]),t._v(" "),a("li",[t._v("IE使用 ActiveXObject（'Microsoft.XMLDOM').loadXML（）；")]),t._v(" "),a("li",[t._v("DOM序列化为XML，XMLSerializer")]),t._v(" "),a("li",[t._v("加载完XML可以像DOM那样操作")]),t._v(" "),a("li",[t._v("XML DOM文档对象加载XML，但是最好还是使用HTTPRequest")])]),t._v(" "),a("h4",{attrs:{id:"浏览器对xpath的支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器对xpath的支持"}},[t._v("#")]),t._v(" 浏览器对XPath的支持")]),t._v(" "),a("ul",[a("li",[t._v("XPth使用来在DOM文档中查找节点的一种手段")])]),t._v(" "),a("h4",{attrs:{id:"xslt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xslt"}},[t._v("#")]),t._v(" XSLT")]),t._v(" "),a("h2",{attrs:{id:"_19、e4x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_19、e4x"}},[t._v("#")]),t._v(" 19、E4X")]),t._v(" "),a("h4",{attrs:{id:"类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[t._v("#")]),t._v(" 类型")]),t._v(" "),a("ul",[a("li",[t._v("直接创建一个  new XML()对象")]),t._v(" "),a("li",[t._v("XMLList类型 多个XML对象")]),t._v(" "),a("li",[t._v("Namespace对象，（前缀，URI）")]),t._v(" "),a("li",[t._v("Qname类型， 表示wrox:message")]),t._v(" "),a("li",[t._v("访问特性，名称前加@")])]),t._v(" "),a("h2",{attrs:{id:"_20、json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_20、json"}},[t._v("#")]),t._v(" 20、JSON")]),t._v(" "),a("h4",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),a("ul",[a("li",[t._v("字符串（必须双引号）、数值、布尔值、null")]),t._v(" "),a("li",[t._v("对象：有序键值对")]),t._v(" "),a("li",[t._v("数组：也是有序的值得列表[]")])]),t._v(" "),a("h4",{attrs:{id:"解析和序列化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析和序列化"}},[t._v("#")]),t._v(" 解析和序列化")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("JSON.stringify(); 转化为JSON字符串，默认不包含任何空格和缩进")]),t._v(" "),a("ul",[a("li",[t._v("toJSON 的返回值直接代替了当前对象，而 stringify 的回调函数则仅仅是修改了当前值。toJSON()作为JSON.stringify中第二个参数(函数过滤器)补充，理解内部顺序很重要。")]),t._v(" "),a("li",[t._v("可以进行过滤，只列出需要的属性（第二个参数）")]),t._v(" "),a("li",[t._v("进行缩进（第三个参数）")])])]),t._v(" "),a("li",[a("p",[t._v("JSON.parse()转化为JSON对象")])])]),t._v(" "),a("h2",{attrs:{id:"_21、ajax与comet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_21、ajax与comet"}},[t._v("#")]),t._v(" 21、Ajax与Comet")]),t._v(" "),a("h4",{attrs:{id:"xmlhttprequest对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xmlhttprequest对象"}},[t._v("#")]),t._v(" XMLHttpRequest对象")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("IE7+    原生 XMLHttpRequest对象")])]),t._v(" "),a("li",[a("p",[t._v('.open("发送请求的类型","get、post","是否异步发送");以备发送')])]),t._v(" "),a("li",[a("p",[t._v(".send(null);参数 如果无必须写null")])]),t._v(" "),a("li",[a("p",[t._v("响应数据")]),t._v(" "),a("ul",[a("li",[t._v("responseText，响应主体被返回的文本")]),t._v(" "),a("li",[t._v("responseXML，响应的类型是text/xml或者application/xml")]),t._v(" "),a("li",[t._v("status 响应的http状态")]),t._v(" "),a("li",[t._v("statusText http状态说明")]),t._v(" "),a("li",[t._v("先检查status属性的值是否200或者304")])])]),t._v(" "),a("li",[a("p",[t._v("异步请求 readyState属性")]),t._v(" "),a("ul",[a("li",[t._v("0未初始化 1启动 2发送 3接受 4完成")]),t._v(" "),a("li",[t._v("abort()取消异步请求，停止触发事件")])])]),t._v(" "),a("li",[a("p",[t._v("HTTP头部信息")])]),t._v(" "),a("li",[a("p",[t._v("GET请求")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("查询参数必须进行encodeURIComponent()进行编码。")]),t._v(" "),a("blockquote",[a("p",[t._v("function addURLParam(url,name,value){\nurl+=(url.indexOf('?')==-1?\"?\":\"&\");url末尾是否有?没有就加，有加&\nurl+=encodeURIComponent(name)+'='+encodeURIComponent(value);\nreturn url;\n}")])])])])]),t._v(" "),a("li",[a("p",[t._v("POST请求")]),t._v(" "),a("ul",[a("li",[t._v('.setRequestHeader("Content-Type","application/x-www-form-urlencoded");')]),t._v(" "),a("li",[t._v(".send(serialize(form));")])])])]),t._v(" "),a("h4",{attrs:{id:"xmlhttprequest-2级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xmlhttprequest-2级"}},[t._v("#")]),t._v(" XMLHttpRequest 2级")]),t._v(" "),a("ul",[a("li",[t._v("FormData() 可以直接把form表单进行序列化")]),t._v(" "),a("li",[t._v("XHR——timeout属性 等待响应多少秒后停止")])]),t._v(" "),a("h4",{attrs:{id:"进度事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进度事件"}},[t._v("#")]),t._v(" 进度事件")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("onload事件来代替readystatechange事件")])]),t._v(" "),a("li",[a("p",[t._v("progress事件，会接收到一个event对象，position表示已经接受的字节数，totalSize 预期字节数")]),t._v(" "),a("blockquote",[a("p",[t._v('后端应该给一个头部信息，否则一直是undefined Response.Headers.Add("Content-Length", len.ToString());\nResponse.Headers.Add("Content-Encoding", "UTF-8");')])])])]),t._v(" "),a("h4",{attrs:{id:"跨资源共享"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨资源共享"}},[t._v("#")]),t._v(" 跨资源共享")]),t._v(" "),a("ul",[a("li",[t._v("CORS 一个资源从与该资源本身所在的服务器不同的域、协议或端口请求一个资源时，资源会发起一个跨域 HTTP 请求。")]),t._v(" "),a("li",[t._v("通过在web服务器端设置：响应头Access-Cntrol-Alow-Origin 来指定哪些域可以访问本域的数据，")])]),t._v(" "),a("h4",{attrs:{id:"其他跨域技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他跨域技术"}},[t._v("#")]),t._v(" 其他跨域技术")]),t._v(" "),a("ul",[a("li",[t._v("图像Ping img.src")]),t._v(" "),a("li",[t._v("JSONP")]),t._v(" "),a("li",[t._v("Comet   一种服务器向页面推送数据，几乎实时推送\n"),a("ul",[a("li",[t._v("长轮询和短轮询")]),t._v(" "),a("li",[t._v("HTTP流")])])]),t._v(" "),a("li",[t._v("SSE服务器发送事件，EventSource对象")]),t._v(" "),a("li",[t._v("Web Sockets\n"),a("ul",[a("li",[t._v("WebSocket对象，只有DOM 0级语法")])])]),t._v(" "),a("li",[t._v("如果可以自由建立和维护服务器可以用WebSockets，如果需要双向通信WebSockets，如果只读取SSE")])]),t._v(" "),a("h2",{attrs:{id:"_22、高级技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_22、高级技巧"}},[t._v("#")]),t._v(" 22、高级技巧")]),t._v(" "),a("h4",{attrs:{id:"高级函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级函数"}},[t._v("#")]),t._v(" 高级函数")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("安全的类型检测")])]),t._v(" "),a("li",[a("p",[t._v("作用域安全的构造函数")])]),t._v(" "),a("li",[a("p",[t._v("惰性载入函数")])]),t._v(" "),a("li",[a("p",[t._v("函数绑定   在特定的this环境中指定参数调用另一个函数")]),t._v(" "),a("ul",[a("li",[t._v("原生bind()方法")])])]),t._v(" "),a("li",[a("p",[t._v("函数柯里化  使用一个闭包返回一个函数")])]),t._v(" "),a("li",[a("p",[t._v("防篡改对象")]),t._v(" "),a("ul",[a("li",[t._v("不可扩展")]),t._v(" "),a("li",[t._v("密封对象 （不可删除）")]),t._v(" "),a("li",[t._v("冻结的对象")])])]),t._v(" "),a("li",[a("p",[t._v("高级定时器")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("setTimeout()")])]),t._v(" "),a("li",[a("p",[t._v("setInterval()")]),t._v(" "),a("ul",[a("li",[t._v("某些间隔会被跳过")]),t._v(" "),a("li",[t._v("多个定时器的代码执行之间的建个可能比预计的小")])]),t._v(" "),a("blockquote",[a("p",[t._v("setTimeout(()=>{\nsetTimeout(arguments.callee,interval);\n},interval);")])])])])]),t._v(" "),a("li",[a("p",[t._v("Yielding Processes")])])]),t._v(" "),a("h2",{attrs:{id:"_23、离线应用和客户端存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_23、离线应用和客户端存储"}},[t._v("#")]),t._v(" 23、离线应用和客户端存储")]),t._v(" "),a("h4",{attrs:{id:"离线检测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#离线检测"}},[t._v("#")]),t._v(" 离线检测")]),t._v(" "),a("ul",[a("li",[t._v("navigator.onLine属性 检测网络是否断开")]),t._v(" "),a("li",[t._v("触发事件\n"),a("ul",[a("li",[t._v("online")]),t._v(" "),a("li",[t._v("offline")])])]),t._v(" "),a("li",[t._v("应用缓存")]),t._v(" "),a("li",[t._v("数据存储\n"),a("ul",[a("li",[t._v("Cookie\n"),a("ul",[a("li",[t._v("客户端存储")]),t._v(" "),a("li",[t._v("名称 不区分大小写")]),t._v(" "),a("li",[t._v("值")]),t._v(" "),a("li",[t._v("域")]),t._v(" "),a("li",[t._v("路径    指定只有从固定页面才能访问")]),t._v(" "),a("li",[t._v("失效时间")]),t._v(" "),a("li",[t._v("安全标志")]),t._v(" "),a("li",[t._v("JS重 cookie字符串由分号隔开 最好来个 CookieUtil")])])])])]),t._v(" "),a("li",[t._v("IE用户数据\n"),a("ul",[a("li",[t._v("使用userDate行为，可以使用.setAttribute .save和.load .get...")])])]),t._v(" "),a("li",[t._v("Web存储机制\n"),a("ul",[a("li",[t._v("Storage 存储名值对。只能存储storage")]),t._v(" "),a("li",[t._v("sessionStorage")]),t._v(" "),a("li",[t._v("globalStorage 指定域 ，跨越会话存储")]),t._v(" "),a("li",[t._v('globalStorage["xxx.com"].name="ckf";')]),t._v(" "),a("li",[t._v("localStorage 必须来自同一个域名 （子域名无效）")]),t._v(" "),a("li",[t._v("storage事件")])])]),t._v(" "),a("li",[t._v("indexedDB")])])])}),[],!1,null,null,null);v.default=e.exports}}]);