# simple html template

## usage 1
```
'hello {world}'.render({world:'world'})
```
## usage 2
```
render("simple html {json.template}",{json:{template:"template"}})
```
## 模板要求

- 不需要有控制流成分（如 循环、条件 等等），只要有变量替换功能即可
- 级联的变量也可以展开
- 被转义的的分隔符 {和}不应该被渲染，分隔符与变量之间允许有空白字符