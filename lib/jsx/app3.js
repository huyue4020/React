// 父组件数据流向子组件
/*
	子组件-->父组件
	子组件属性，声明函数，函数有形参
	子组件内部，通过this.props属性名(数据)  ，这个数据等于形参

	父组件内部，子组件函数内，通过父组件的this修改默认状态值

	父组件获取 this.state状态名
 */
/*
	父组件-->子组件
	父组件设置状态
	子组件标签，属性，传状态值

 */
   var Demo = React.createClass({
   	getInitialState:function(){
   		return{
   			res:''
   		}
   	},
   	render:function(){
   //		console.log(this.state.res);
   		var _this=this;
   		//通过子组件的属性将父元素改变状态的内容传递过去
   		return (
   			<div>
   				<h1>父组件</h1>
   				<h2>{this.state.res}</h2>
   				<Child name={function(aa){
   					_this.setState({res:aa})
   				}}/>
   			</div>
   		)
   	}
   })
   var Child = React.createClass({
   	handel:function(e){
   		//e.target指向input输入框，将输入框的内容赋值给状态res
   		this.props.name(e.target.value)
   	},
   	render:function(){
   		return (
   			<div>
   				<h2>子组件</h2>
   				<input type="text" onChange={this.handel}/>
   			</div>
   		)
   	}
   })
   ReactDOM.render(<Demo/>,document.getElementById('out'))

//父传子，父组件里面改变的值赋给状态state，子组件通过自定义属性把状态设置成属性值，
//子组件通过调用父组件给它设置的属性，可以调用子组件的属性值，达到传值效果
var Demo1 = React.createClass({
	getInitialState:function(){
		return{
			res:''
		}
	},
	handel:function(e){
		this.setState({res:e.target.value})
	},
	render:function(){
		var _this=this;
		return (
			<div>
				<h1>父组件</h1>
				<input type="text" onChange={this.handel}/>
				<Child name={this.state.res}/>
			</div>
		)
	}
})
var Child = React.createClass({
	render:function(){
		return (
			<div>
				<h2>子组件</h2>
				<h2>{this.props.name}</h2>
			</div>
		)
	}
})
ReactDOM.render(<Demo1/>,document.getElementById('out1'))
