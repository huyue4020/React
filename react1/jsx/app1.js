var Demo=React.createClass({
//	声明默认状态
	getInitialState:function(){
		return{
			res:'hello world'
		}
	},
	handel:function(){
		this.setState({res:'你好 react'})
	},
	render:function(){
		console.log(this.state)
//		this.setState({res:'hello react'})
		return(
			<div>
				<h1>状态</h1>
				<button onClick={this.handel}>修改状态值</button>
				<h2>状态值:{this.state.res}</h2>
			</div>
		)
	}
})

ReactDOM.render(<Demo/>,document.getElementById('out'))

/*
 状态
 1/只能在组件内部声明－－getInitialState－－返回对象－－设置状态名与值
 2/获取－－this。state获取
 3/修改－－this。setState修改
 注意：
 不能直接修改 （不能在render函数内部直接修改）－－组件二次渲染－－浏览器崩溃
 一般要在事件中进行修改
 
 
  
  */