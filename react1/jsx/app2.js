var Demo = React.createClass({
	getInitialState:function(){
		return{
			res:'text',
			res1:'明文框'
		}
	},
	handel:function(){
		if(this.state.res=='text'){
			this.setState({res:'password',res1:'密码框'})
		}else{
			this.setState({res:'text',res1:'明文框'})
		}
		
	},
	render:function(){
		return(
			<div>
				<input type={this.state.res}/>
				<button onClick={this.handel}>{this.state.res1}</button>
			</div>
		)
	}
})

ReactDOM.render(<Demo/>,document.getElementById("out"))
