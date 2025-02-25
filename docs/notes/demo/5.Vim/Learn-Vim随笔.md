---
title: Learn-Vim随笔
createTime: 2025/02/23 21:45:33
permalink: /demo/9t7rprqt/
---
# 一、前言

学习vim的过程中发现了很多很好的资源，其中不乏bilibili上up主的精品教程。也在YouTube上看过很多教程。但Learn-Vim这个Github仓库实在让我受益良多。

本笔记便是出于此仓库：
> [仓库地址](https://github.com/iggredible/Learn-Vim/blob/master/)

附上个人.vimrc配置文件:
```vim
syntax on	" 开启语法高亮
set number	" 设置行号
set relativenumber	" 设置相对行号
set wrap		" 开启代码包裹，防止溢出屏幕	
set showcmd		" 显示命令
set wildmenu		" 开启补全菜单
set hlsearch		" 开启搜索高亮
set incsearch		" 开启实时搜索高亮
set ignorecase		" 搜索忽略大小写
set cursorline		" 开启鼠标地平线

" 按下冒号重制高亮
exec "nohlsearch"	
" 将大写JK映射为5倍jk
noremap J 5j
noremap K 5k
nnoremap <esc><esc> :noh<return><esc>
" 映射自动保存
map S :w<CR>
map Q :q<CR>
map s :<nop>
map R  :source<CR>

call plug#begin()

Plug 'vim-airline/vim-airline'
Plug 'iamcco/markdown-preview.nvim', { 'do': { -> mkdp#util#install() }, 'for': ['markdown', 'vim-plug']}
Plug 'iamcco/markdown-preview.nvim', { 'do': 'cd app && npx --yes yarn install' }
Plug 'preservim/nerdtree'
Plug 'jiangmiao/auto-pairs'
Plug 'preservim/nerdcommenter'
Plug 'connorholyday/vim-snazzy'

call plug#end()


color molokai

map sr :set splitright<CR>:vsplit<CR>
map sl :set nosplitright<CR>:vsplit<CR>
map st :set nosplitbelow<CR>:split<CR>
map sb :set splitbelow<CR>:split<CR>

noremap <Up> <NOP>
noremap <Down> <NOP>
noremap <Left> <NOP>
noremap <Right> <NOP>
```


# 二、vim语法

vim的语法只有一句，`verb+noun`！

## 2.1 动词

这里简要罗列出vim的动词列表：
```
y    复制
d    删除
c    修改(删除并开始编辑) 
```

## 2.2 名词
以下皆是名词，但分为了两种。
### 2.2.1 简单名词

```
h    左
j    下
k    上
l    右
w    单词
}    跳到下一段落
$    行末尾
```

### 2.2.2 补充的名词
```
w         一个单词
p         一个段落
s         一个句子
( or )    一对 ( ) 括号
{ or }    一对 { } 括号
[ or ]    一对 [ ] 括号
< or >    一对 < > 括号
t         一对XML标签,例如<html></html>
"         一对 " " 引号
'         一对 ' ' 引号
`         一对 ` ` 引号
```

# 三、移动

## 3.1 字符导航
```
h   向左
j   向下
k   向上
l   向右
gj  Down in a soft-wrapped line
gk  Up in a soft-wrapped line
```

禁用箭头的设置:
```
noremap <Up> <NOP>
noremap <Down> <NOP>
noremap <Left> <NOP>
noremap <Right> <NOP>
```

相对行号:
```
set relative number
```

## 3.2 计算编号

```
[count] + motion
```

## 3.3 词语导航

```
w     移动到下一个word的开头
W     移动到下一个WORD的开头
e     移动到下一个word的结尾
E     移动到下一个WORD的结尾
b     移动到上一个word的开头
B     移动到上一个WORD的开头
ge    移动到上一个word的结尾
gE    移动到上一个WORD的结尾
```

## 3.4 行导航

```
0     跳转到当前行的第一个字符
^     跳转到当前行的第一个非空白字符
g_    跳转到当前行的最后一个非空白字符
$     跳转到当前行的最后一个字符
n|    跳转到当前行的第n列
```

## 3.5 搜索动词
```
f    在同一行搜索下一个匹配
F    在同一行搜索前一个匹配
t    在同一行搜索下一个匹配，但是光标落在目标前
T    在同一行搜索下一个匹配，但是光标落在目标后
;    在同一行使用上一次搜索，方向相同
,    在同一行使用上一次搜索，方向相反
```

## 3.6 句子导航和段落导航
```
(    跳到上一个句子
)    跳到下一个句子
```

下面是一个有两个段落的句子：

```
I am a sentence. I am another sentence because I end with a period. I am still a sentence when ending with an exclamation point! What about question mark? I am not quite a sentence because of the hyphen - and neither semicolon ; nor colon :

There is an empty line above me.
```
> 个人感觉句子、段落在代码里可能就不是那么实用。但用于写文章博客还是很屌的。

## 3.7 匹配导航

> 程序员专用

光标在成对的括号中其中一对上时按下`%`来跳到对应的括号上。

使用场景：
```
(define (fib n)
  (cond ((= n 0) 0)
        ((= n 1) 1)
        (else
          (+ (fib (- n 1)) (fib (- n 2)))
        )))
```
光标在其中一个括号上可以快速跳转到对应的括号。

## 3.8 行号导航
```
gg    去到第一行
G     去到最后一行
nG    去到第n行
n%    去到第百分之n行
```

使用`ctrl+g`来显示行数。

gg和GG绝对是实用中的实用。

## 3.9 窗口导航
```
H     去到屏幕的最上方
M     去到屏幕的最中间
L     去到屏幕的最底部  
nH    去到离屏幕顶部n行的位置
nL    去到离屏幕底部n行的位置
```

## 3.10 滚动

```
Ctrl-E    向下滚动一行
Ctrl-D    向下滚动半个屏幕
Ctrl-F    向下滚动
Ctrl-Y    向上滚动一行
Ctrl-U    向上滚动半个屏幕
Ctrl-B    向上滚动整个屏幕
```

## 3.11 搜索导航


> 这里的搜索是整个文档的。

```
/    向后搜索一个匹配
?    向前搜索一个匹配
n    重复上一个匹配，方向相同
N    重复上一个匹配，方向相反
```

搜索结束后关闭高亮(在~/.vimrc中添加配置)：
```
nnoremap <esc><esc> :noh<return><esc>
```
额外的补充:
```
*     向后搜索光标位置的单词
#     向前搜索光标位置的单词
g*    在*的基础上增加了模糊匹配
g#    在#的基础上增加了模糊匹配
```

## 3.12 标记位置 
标记当前位置，类似书签。
```
ma    标记a的位置
`a    精确跳转到标记的a的位置
'a    跳转到标记a的行首
```
其中小写表示局部标记，大些表示全局标记。

局部标记每个文件(缓冲区)只有一个，全局标记所有文件共享。

使用marks来查看所有的标记。

更多的标记用的不多，这里直接饮用(不是错别字❌)原文:
```vim
''    Jump back to the last line in current buffer before jump
``    Jump back to the last position in current buffer before jump
`[    Jump to beginning of previously changed / yanked text
`]    Jump to the ending of previously changed / yanked text
`<    Jump to the beginning of last visual selection
`>    Jump to the ending of last visual selection
`0    Jump back to the last edited file when exiting vim
```

## 3.13 所有的跳转
```
'a       去到标记的a行
`a       去到标记的a位置
G       Go to the line(这个没懂，shift+G不是跳转到文档底部吗？)
/       向后搜索
?       向前搜索
n       重复最后一次搜索，方向一致
N       重复最后一次搜索，方向相反
%       找到匹配项
(       跳到上一句
)       跳到下一句
{       跳到上一段
}       跳到下一段
L       去到显示窗口的最后一行
M       去到窗口的中间
H       去到显示窗口的顶部
[[      去到上一次会话
]]      去到下一次会话
:s      Substitute
:tag    去到定义的标签
```
> 具体说明见Lear-Vim作者文档✍️。















