// 创建组件Demo
var Demo = React.createClass({
	// 声明默认状态,状态值可以修改
	getInitialState:function(){
		return {
			res:'hello wrold'
		}
	},
	handel:function(){
		this.setState({res:'你好 react'})
	},
	render:function(){
		console.log(this.state)
		// this.setState({res:'hello react'}) //不允许在传值过程中修改状态，会造成组件二次渲染，浏览器崩溃
		return (
			<div>
				<h1>状态</h1>
				<button onClick={this.handel}>修改状态</button>
				<h2>状态值：{this.state.res}</h2>
			</div>
		)
	}
})
ReactDOM.render(<Demo/>,document.getElementById('out'))
/*
	状态
	1、只能在组件内部声明，通过getInitialState，返回对象，设置状态名和值
	2、获取，this.state获取
	3、修改，this.setState修改

	注意：不能直接修改(不能在render函数内部直接修改，会造成组件二次渲染，浏览器崩溃)
	一般要在事件中进行修改

	

 */