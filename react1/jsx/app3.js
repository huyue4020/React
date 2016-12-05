var Demo = React.createClass({
	getInitialState:function(){
		return{
			res:''
		}
	},
	handel:function(e){
//		console.log(e.target.value)	
		this.setState({res:e.target.value})
	},
	render:function(){
		console.log(this.state.res)
		return(
			<div>
				<h1>父组件</h1>
				<input type="text" onChange={this.handel}/>
				<Child name={this.state.res}/>
			</div>
		)
	}
})
var Child=React.createClass({
	render:function(){
		return(
			<div>
				<h2>子组件</h2>
				<h2>{this.props.name}</h2>
			</div>
		)
	}
})


ReactDOM.render(<Demo/>,document.getElementById("out"))
/*
 父组件－子组件
 父组件设置状态
 子组件标签－－属性－－传状态值
 
 子组件内部－－this。props。属性名获取数据
 
 */

