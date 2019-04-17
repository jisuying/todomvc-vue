(function (window) {
	'use strict';
	

	
	new Vue({
		el:'#app',
		data:{
			todoName:'',
			editId : -1,
			list:''
		},
		created(){
			this.list = JSON.parse(localStorage.getItem('list'))||[]
		},
		computed:{
			showFoot(){
				return this.list.length > 0
			},
			comOver(){
				return this.list.filter(item=>!item.done).length
			},
			hideClear(){
				return this.list.some(item => item.done)
			}
		},
		watch:{
			list:{
				deep:true,
				handler(newVal){
					localStorage.setItem('list',JSON.stringify(newVal))
				}
			}
		},
		methods:{
			addTodo(){
				let id = this.list.length === 0 ? 1 : this.list[this.list.length-1].id + 1
				this.list.push({
					id ,
					name : this.todoName,
					done : false
				})
				this.todoName = ''
			},
			delTodo(i){
				//方法一 : 根据索引--删除
				// this.list.splice(i,1)
				//方式二 : 根据id -- 查找索引 --删除
				// let index = this.list.findIndex(item => item.id == i)
				// this.list.splice(index,1)
				//方式三 : 根据 id --- 过滤出id==i的那一条
				this.list = this.list.filter(item => item.id !== i)
			},
			editTodo(i){
				this.editId = i
			},
			hideEdit(){
				this.editId = -1
			}
		}
	})

})(window);
