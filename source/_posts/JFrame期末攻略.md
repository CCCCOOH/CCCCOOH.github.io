---
title: JFrame期末攻略
date: 2024-12-31 10:41:45
tags: JFrame
catogories: 
  - 其他
  - 学校
excerpt: "JFrame期末系统梳理"
---

## 程序框架

```java
package myPackage;

//	直接这两个库全部梭哈导入
import java.awt.*;
import javax.swing.*;

//	App是你的程序，继承自JFrame
class App extends JFrame {
	App() {
		super("我是窗口标题");
		Container container = getContentPane();			//	获取窗口容器
		
		
//		窗口设置，放在最后写。
		setVisible(true);														//	设置窗口是否可见
		setSize(300, 200);													//	设置窗口大小
		setDefaultCloseOperation(EXIT_ON_CLOSE);		//	设置关闭后完全销毁程序
	}
}

public class Test1 {
	public static void main(String[] args) {
		App app = new App();
	}
}
```

这个程序是整个`JFrame`程序的框架。

>  关于布局和基础知识本文不过多赘述，本文只讲比较冷门的可能考点。



## 常见容器

 **1.** **Jlabel**（**标签**）

 **2.JTextField**(**文本框**)

 **3.** **JTexArea(文本区/文本域)**

 **4. Jbutton（按钮）**

 **5. JPanel(面板)**

 **6.** **JCheckBox(选择框/复选框)**

 **7.** **JRadioButton（单选按钮）**

 **8.** **JComboBox(下拉列表)**

 **9.** **JPasswordField(密码框)**

## 菜单栏(JMenuBar)

```java
package myPackage;

//	直接这两个库全部梭哈导入
import java.awt.*;

import javax.swing.*;


//	App是你的程序，继承自JFrame
class App extends JFrame {
	App() {
		super("我是窗口标题");
		Container container = getContentPane();		//	获取窗口容器
		JMenuBar menu_bar = new JMenuBar();			//	菜单条
		JMenu menu = new JMenu("菜单大哥");					//	菜单
		JMenu menu2 = new JMenu("菜单");					//	菜单
		JMenuItem item = new JMenuItem("小骑士");
		JMenuItem item2 = new JMenuItem("骑士");
		
		setJMenuBar(menu_bar);						//	设置菜单栏
		
		menu_bar.add(menu);							//	菜单栏添加菜单
		menu_bar.add(menu2);							//	菜单栏添加菜单
		menu.add(item);								//	菜单添加子项目
		menu.add(item2);								//	菜单添加子项目
		
		
//		窗口设置，放在最后写。
		setVisible(true);							//	设置窗口是否可见
		setSize(300, 200);							//	设置窗口大小
		setDefaultCloseOperation(EXIT_ON_CLOSE);	//	设置关闭后完全销毁程序
	}
}

public class Test1 {
	public static void main(String[] args) {
		App app = new App();
	}
}
```

**程序效果**：

<img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2024-12-31%2011.09.59.png" alt="截屏2024-12-31 11.09.59" style="zoom:50%;" />

**相关概念**：

![截屏2024-12-31 11.10.31](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2024-12-31%2011.10.31.png)

## 标签(JLabel)

> 用**Jlabel**可以实现插入图片的效果

```java
package myPackage;

//	直接这两个库全部梭哈导入
import java.awt.*;
import javax.swing.*;


//	App是你的程序，继承自JFrame
class App extends JFrame {
	App() {
		super("我是窗口标题");
		Container container = getContentPane();		//	获取窗口容器
		container.add(new JLabel("Shy的专辑封面💽"));	
		container.add(new JLabel(new ImageIcon("/Users/sy/Downloads/Shy/Shy.jpg")));
		
//		窗口设置，放在最后写。
		container.setLayout(new FlowLayout());
		setVisible(true);													//	设置窗口是否可见
		pack();																		
    //	pack 方法可以将自动调整窗口大小(代替手动设置尺寸)
		setDefaultCloseOperation(EXIT_ON_CLOSE);	//	设置关闭后完全销毁程序
	}
}

public class Test1 {
	public static void main(String[] args) {
		App app = new App();
	}
}
```

> `pack()`方法非常好用，可以根据内容自动调整窗口大小为合适的大小。

**运行效果**：

<img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2024-12-31%2011.22.10.png" alt="截屏2024-12-31 11.22.10" style="zoom:50%;" />

## 单选框(JRadioButton)

### 使用的事件接口

```java
public void addItemListener(ItemListener l)
```

### 常用方法

```java
public boolean isSelected();			//	判断按钮是否被选中
clearSelection();									//	清空选中状态
```

> `JRadioButton`常常成对出现，届时需要将他们添加到同一个按钮组`ButtonGroup`中。

```java
package myPackage;

//	直接这两个库全部梭哈导入
import java.awt.*;
import javax.swing.*;


//	App是你的程序，继承自JFrame
class App extends JFrame {
  
	JRadioButton man = new JRadioButton("男");
	JRadioButton woman = new JRadioButton("女");
	
	ButtonGroup radios = new ButtonGroup();			//	按钮组	
	App() {
		super("我是窗口标题");
		Container container = getContentPane();		//	获取窗口容器
		
//		########## 添加按钮(JRadioButton) ##########
		container.add(man);
		container.add(woman);
		
//		########## 添加到同一个按钮组 ##########
		radios.add(man);
		radios.add(woman);
		
		
//		########## 窗口设置，放在最后写。 ##########
		container.setLayout(new FlowLayout());
		setVisible(true);													//	设置窗口是否可见
		setSize(300, 200);
		setDefaultCloseOperation(EXIT_ON_CLOSE);	//	设置关闭后完全销毁程序
	}
}

public class Test1 {
	public static void main(String[] args) {
		App app = new App();
	}
}
```

### 事件处理

**单选按钮**(`JRadioButton`)使用`ActionEvent`和`ItemEvent.ActionEvent`事件进行处理，与按钮基本一致。从本节的示例可以看到，当单选按钮的选择状态发生改变时，会触发`ItemEvent`事件，负责监听的接口是`ItemListener`,在事件发生时会调用`itemStateChanged`方法进行处理。

只需要在使用的类中实现该接口：

```java
class App extends JFrame implements ItemListener {
	App() {
    JRadioButton man = new JRadioButton("男");
    JRadioButton woman = new JRadioButton("女");
    
    //	给 RadioButton 按钮绑定事件
    man.addItemListener(this);				
		woman.addItemListener(this);
    
    //	其余代码省略 ...
  }	//	构造方法
  @Override
	public void itemStateChanged(ItemEvent e) {
		// TODO 在RadioButton发生改变时你要做什么？
	}
}
```

两个注意点：

- 使用`addItemListener(this)`绑定接口
- 实现`ItemListener`接口
- 实现接口中的`itemStateChanged()`方法

### 具体例子

```java
package myPackage;

//	直接这两个库全部梭哈导入
import java.awt.*;
import java.awt.event.ActionListener;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;

import javax.swing.*;


//	App是你的程序，继承自JFrame
class App extends JFrame implements ItemListener {
	JRadioButton man = new JRadioButton("男");
	JRadioButton woman = new JRadioButton("女");
	
	ButtonGroup radios = new ButtonGroup();			//	按钮组	
	App() {
		super("我是窗口标题");
		Container container = getContentPane();		//	获取窗口容器
		
//		添加按钮(JRadioButton)
		container.add(man);
		container.add(woman);
		
//		添加到同一个按钮组
		radios.add(man);
		radios.add(woman);
		
//		给每个JradioButton绑定事件，告诉按钮你需要给事件监听器发送信号📶
		man.addItemListener(this);
		woman.addItemListener(this);
		
//		窗口设置，放在最后写。
		container.setLayout(new FlowLayout());
		setVisible(true);							//	设置窗口是否可见
		setSize(300, 200);
		setDefaultCloseOperation(EXIT_ON_CLOSE);	//	设置关闭后完全销毁程序
	}
	@Override
	public void itemStateChanged(ItemEvent e) {
		// TODO Auto-generated method stub
		JRadioButton source = (JRadioButton)e.getSource();
		System.out.println(source.getText() + "发生了改变!🚀");
	}
}

public class Test1 {
	public static void main(String[] args) {
		App app = new App();
	}
}
```

### 运行效果

<img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2024-12-31%2011.42.12.png" alt="截屏2024-12-31 11.42.12" style="zoom:50%;" />

## 复选框(JCheckBoxButton)

使用方法和`JRadioButton`完全一致，使用同样的接口，同样可以使用按钮组进行添加。请自行将所有`JRadioButton`中的`JRadioButton`全部替换成`JCheckBoxButton`，然后你会发现程序正常运行。

## 下拉菜单(JComboBox)

包含程序框架的完整代码：

```java
package myPackage;

//	直接这两个库全部梭哈导入
import java.awt.*;
import javax.swing.*;


//	App是你的程序，继承自JFrame
class App extends JFrame {
	String[] str = {"空洞骑士", "丝之歌", "Minecraft"};
	JComboBox combo = new JComboBox(str);
	App() {
		super("我是窗口标题");
		Container container = getContentPane();		//	获取窗口容器
		container.add(combo);
		
//		窗口设置，放在最后写。
		container.setLayout(new FlowLayout());
		setVisible(true);							//	设置窗口是否可见
		setSize(300, 200);
		setDefaultCloseOperation(EXIT_ON_CLOSE);	//	设置关闭后完全销毁程序
	}
}

public class Test1 {
	public static void main(String[] args) {
		App app = new App();
	}
}
```

### 构造方法

```java
String[] str = {"空洞骑士", "丝之歌", "Minecraft"};
JComboBox combo = new JComboBox(str);
```

<img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2024-12-31%2011.53.38.png" alt="截屏2024-12-31 11.53.38" style="zoom:50%;" />

### 常用方法

```java
public void addItemListener(ItemListener l);	// 常用的事件实现
public Object getSelectedItem();							// 获取选中的item对象
public int getSelectedIndex();								// 获得选中的索引（常用）
```

### 实际使用

```java
package myPackage;

//	直接这两个库全部梭哈导入
import java.awt.*;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;

import javax.swing.*;


//	App是你的程序，继承自JFrame
class App extends JFrame implements ItemListener {
	String[] str = {"空洞骑士", "丝之歌", "Minecraft"};
	JComboBox combo = new JComboBox(str);
	App() {
		super("我是窗口标题");
		Container container = getContentPane();		//	获取窗口容器
		container.add(combo);
		
//		添加事件
		combo.addItemListener(this);
		
//		窗口设置，放在最后写。
		container.setLayout(new FlowLayout());
		setVisible(true);							//	设置窗口是否可见
		setSize(300, 200);
		setDefaultCloseOperation(EXIT_ON_CLOSE);	//	设置关闭后完全销毁程序
	}
	@Override
	public void itemStateChanged(ItemEvent e) {
		// TODO Auto-generated method stub
		JComboBox source = (JComboBox)e.getSource();
		System.out.println(source.getSelectedIndex()+":"+source.getSelectedItem().toString());
	}
}

public class Test1 {
	public static void main(String[] args) {
		App app = new App();
	}
}
```

**运行效果**：

![截屏2024-12-31 12.00.55](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2024-12-31%2012.00.55.png)

## 文本输入框(JTextField)

### 实际使用

```java
package myPackage;

//	直接这两个库全部梭哈导入
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;

import javax.swing.*;


//	App是你的程序，继承自JFrame
class App extends JFrame implements ActionListener {
	JTextField txt = new JTextField("请输入文字", 20);
	App() {
		super("我是窗口标题");
		Container container = getContentPane();		//	获取窗口容器
		
//		添加组件
		container.add(txt);
//		绑定事件
		txt.addActionListener(this);
		
//		窗口设置，放在最后写。
		container.setLayout(new FlowLayout());
		setVisible(true);							//	设置窗口是否可见
		setSize(300, 200);
		setDefaultCloseOperation(EXIT_ON_CLOSE);	//	设置关闭后完全销毁程序
	}
	@Override
	public void actionPerformed(ActionEvent e) {
		// TODO Auto-generated method stub
		JTextField txt = (JTextField)e.getSource();
		System.out.println(txt.getText());
	}
}

public class Test1 {
	public static void main(String[] args) {
		App app = new App();
	}
}
```

### 常用方法

```java
getText();	//	获取文本
setText();	// 	设置文本
actionPerformed();		//	实现actionListener接口
```

### 运行效果

![截屏2024-12-31 12.07.37](../../../Desktop/截屏2024-12-31 12.07.37.png)

## 数字和字符串互相转换

```java
package myPackage;

public class Test2 {
	public static void main(String[] args) {
		Integer a = 3;
		Double b = 300.0;
//		数字转字符串
		System.out.println("字符串a：" + a.toString());
		System.out.println("字符串b：" + b.toString());
		
//		字符串转数字
		Integer a2 = Integer.parseInt("301");
		Double b2 = Double.parseDouble("301.0");
		System.out.println(a2);
		System.out.println(b2);
	}
}
```

### 运行结果

<img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2024-12-31%2013.01.20.png" alt="截屏2024-12-31 13.01.20" style="zoom:50%;" />

### 使用的方法

```java
// 将字符串转为数字
Double.parseDouble(String st);
Integer.parseInteger(String st);

// 将数字转为字符串需使用对应的类来存储
Double x = 3.0;
x.toString();		// 返回String类型的x
```

