// 创建组件Demo
var Demo = React.createClass({
	// 声明默认状态,状态值可以修改
	getInitialState:function(){
		return {
			res:'text',
			res1:'明文框'
		}
	},
	handel:function(){
		if(this.state.res == 'text'){
			this.setState({res:'password',res1:'密码框'})
		}else {
			this.setState({res:'text',res1:'明文框'})
		}
	},
	render:function(){
		return (
			<div>
				<input type={this.state.res}/>
				<button onClick={this.handel}>{this.state.res1}</button>
			</div>
		)
	}
})
ReactDOM.render(<Demo/>,document.getElementById('out'))
