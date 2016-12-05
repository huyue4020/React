var Demo = React.createClass({
	getInitialState:function(){
		return {
			type:'text',
			res:'明文框'
		}
	},
	handel:function(){
		if(this.state.type=='text'){
			this.setState({type:'password',res:'密码框'})
		}else {
			this.setState({type:'text',res:'明文框'})
		}
	},
	render:function(){
		return (
			<div>
				<input type={this.state.type}/>
				<button onClick={this.handel}>{this.state.res}</button>
			</div>
		)
	}
})

ReactDOM.render(<Demo/>,document.getElementById('out'))