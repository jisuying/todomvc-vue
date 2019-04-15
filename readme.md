# 使用vue实现todomvc小案例
> 目的 : 练习vue的知识点
## 准备工作
1. 从github仓库里找到todomvc的html版本
2. 使用 `git clone https://github.com/tastejs/todomvc-app-template.git`下载下来
3. 使用 `npm i` 把`package.json`里需要引入的第三方包下载下来
4. 再使用 `npm i vue` 把vue的第三方包下载下来
5. 先实例化vue环境 ,引入vue包 

## 项目开始
1. 使用`本地存储 localStorage`存,取数据
 ```js
 //设置默认值
    let list = JSON.parse(localStorage.getItem('list'))||[]
 ```
 ```js
 //使用watch监听 数据发生改变,就存到本地
    watch:{
        list:{
            deep:true,
            handler(newVal){
                localStorage.setItem('list',JSON.stringify(newVal))
            }
        }
    },
 ```
    - 使用 `v-for` 循环遍历数据
2. 修改多选框的选中状态  (多选框:表单元素)
    - 双向绑定 多选框和数据
    - `v-model='item.done'`
3. 修改任务是否完成的状态 (操作`completed`类)
    - 根据数据中done的值 绑定completed类 
    - `:class = '{completed : item.done}'`
4. 添加任务的功能
    - 给data添加一个属性 ,用来存放 input输入的值
    - 双向绑定  `v-model='todoName'`
    - 摁回车时 ,添加数据 `@keyup.enter = 'addTodo'`
    - 添加数据逻辑
    ```js
    //设置唯一的id
    let id = this.list.length === 0 ? 1 : this.list[this.list.length-1].id + 1
    //把对象添加到数组中
    this.list.push({
        id ,
        name : this.todoName,
        done : false
    })
    //清空input框
    this.todoName = ''
    ```
5. 删除任务的功能
    - 思路(根据`索引`或 `id` )
    ```js
    delTodo(i){
        //方法一 : 根据索引--删除
        // this.list.splice(i,1)
        //方式二 : 根据id -- 查找索引 --删除
        // let index = this.list.findIndex(item => item.id == i)
        // this.list.splice(index,1)
        //方式三 : 根据 id --- 过滤出id==i的那一条
        this.list = this.list.filter(item => item.id !== i)
    }
    ```
6. 编辑任务的功能  `双击`操作`editing`类
    - 双击 添加`editing`类 
    - 摁回车 去掉`editing`类
    - 思路 
        - 添加一个变量,默认值设为-1 表示不编辑
        - 双击时  把当前id赋值给变量
        - 摁回车时 再把变量设置成默认值-1
7. 尾部显示和隐藏的功能
    - 思路(根据数据的长度判断)
        - 方法一 : 直接写表达式 `v-show='list.length > 0'` 
        - 方法二 : 使用函数代替`v-show='showFoot()` 
        ```js
            methods:{
                showFoot(){
                    return this.list.length > 0
                }
            }
        ```
        - 方法三 : 使用 `计算属性` `v-show='showFoot1'`
        ```js
            computed:{
                showFoot1(){
                    return this.list.length > 0
                }
            }
        ```
8. 尾部细节处理
    - 处理 `0 items left`的实时更改
    - 处理 `Clear completed`的显示和隐藏
9. 细节优化



    

