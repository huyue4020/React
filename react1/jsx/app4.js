var Demo = React.createClass({
	getInitialState:function(){
		return{
			res:''
		}
	},
	render:function(){
		console.log(this.state.res)
		var _this=this;
		return(
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
var Child=React.createClass({
	handel:function(e){
		this.props.name(e.target.value)
	},
	render:function(){
		return(
			<div>
				<h2>子组件</h2>
				<input type="text" onChange={this.handel}/>
				
			</div>
		)
	}
})


ReactDOM.render(<Demo/>,document.getElementById("out"))
/*
 子组件－父组件
 子组件属性－－声明函数 －－函数有形参
 子组件内部－－通过this。props。属性名（数据）  数据＝＝形参
 
 父组件内部－－子组件函数内－－通过父组件的this修改默认状态值
 
 父组件获取  this。state。状态名
 
 
 
 
 
  
 */