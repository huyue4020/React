var Demo = React.createClass({
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
	componentWillReceiveProps:function(a){
		console.log(a)
		console.log('组件即将接受的新属性')
	},
	shouldComponentUpdate:function(a){
		if(a.name == 'test'){
			return true
		}else {
			return false
		}
	},
	componentWillUpdate:function(){
		console.log('组件即将更新')
	},
	render:function(){
		return (
			<div>
				<h2>子组件</h2>
				<h3>{this.props.name}</h3>
			</div>
		)
	},
	componentDidUpdate:function(){
		console.log('组件更新完成')
	}
})
ReactDOM.render(<Demo/>,document.getElementById('out'))
