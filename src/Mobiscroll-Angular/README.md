# Mobiscroll v3.0.0-beta5
`Update 2016-09-20`

本次更新了Datetime，Calendar，Forms，Numpad，Listview，Menustrip，Rating，Integrations，Themes组件

### 安装
`$ git clone https://git.oschina.net/Cndj/Mobiscroll-Angular`

### 演示
https://demo.mobiscroll.com/

### 官方文档
https://docs.mobiscroll.com/3-0-0_beta5/angular 
<br>
![输入图片说明](http://git.oschina.net/uploads/images/2016/0930/114023_93858659_79739.png "")


> _如果以下翻译有不足的地方，请包涵...并且请在评论指出，谢谢_ 

### 全局
![](http://git.oschina.net/uploads/images/2016/0930/102633_45c49706_79739.png "NEWS")
`popup`方式使用绝对定位，和苹果手机上toolbar显示在底部

![](http://git.oschina.net/uploads/images/2016/0930/103024_6d389e66_79739.png "FIXED")
在`RTL`模式下IOS按钮顺序和在`LTR`模式下是一样的

### Datetime
![](http://git.oschina.net/uploads/images/2016/0930/102633_45c49706_79739.png "NEWS")
能在一个滑轮下显示日期和时间

### Calendar
![](http://git.oschina.net/uploads/images/2016/0930/103024_6d389e66_79739.png "FIXED")
1.　周数没有正确的显示.
2.　In multiple selection mode error was thrown if`defaultValue` specified and the input field had an initial value.
3.　If`option` method was called on inline calendar, scrollview instances were not properly destroyed.
4.　Trigger`onSet` event in inline mode, when day selected.

### Forms
![](http://git.oschina.net/uploads/images/2016/0930/102633_45c49706_79739.png "NEWS")
1.　`option` 没有正常工作
2.　表单组的样式 : `mbsc-form-group`, `mbsc-form-group-title` 和 `mbsc-form-group-inset` 类.

![](http://git.oschina.net/uploads/images/2016/0930/103024_6d389e66_79739.png "FIXED")
1.　如果存在图标，标签将全部左对齐 (Material主题).
2.　RTL 模式渲染问题.

### Numpad
![](http://git.oschina.net/uploads/images/2016/0930/103024_6d389e66_79739.png "FIXED")
undefined' appeared on the numpad display when the `leftKey` or `rightKey` did not have a `value` field defined.

### Listview
![](http://git.oschina.net/uploads/images/2016/0930/103024_6d389e66_79739.png "FIXED")
`option` 没有正确的工作.

### Menustrip
![](http://git.oschina.net/uploads/images/2016/0930/103024_6d389e66_79739.png "FIXED")
1.　`option` 没有正确的工作.
2.　Height was not rendered correctly after reinitializing the component.
3.　If swipe was allowed to one direction only, but a stage was defined on the other direction as well, on quick swipe the stage was activated.

### Rating
![](http://git.oschina.net/uploads/images/2016/0930/103024_6d389e66_79739.png "FIXED")
Grading style fixes if box-sizing is set to border-box for all elements.

### Integrations
![](http://git.oschina.net/uploads/images/2016/0930/102633_45c49706_79739.png "NEWS")
React Form Label component with validation property.

![](http://git.oschina.net/uploads/images/2016/0930/103024_6d389e66_79739.png "FIXED")
React rating style option naming collision fixed.
React Listview component properly updates items.
React Select component accepts select element as child.
React Stepper component won't multiply elements on dynamic settings update.

### Themes
![](http://git.oschina.net/uploads/images/2016/0930/102633_45c49706_79739.png "NEWS")
3D scroll effect for scroller components with iOS theme.
iOS Dark theme.
