var Demo = React.createClass({
	render:function(){
		return (
			<div>
				<Nav/>
				<div id="con"></div>
			</div>
		)
	}
})

var Nav = React.createClass({
	tap:function(e){
		var str = e.target.getAttribute('title');
		switch (str) {
			case "shouye":
				//先卸载
				ReactDOM.unmountComponentAtNode(document.getElementById('con'))
				// 再渲染
				ReactDOM.render(<Shouye/>,document.getElementById('con'));
				break;
			case "about":
				ReactDOM.unmountComponentAtNode(document.getElementById('con'))
				ReactDOM.render(<About/>,document.getElementById('con'));
				break;
			case "qita":
				ReactDOM.unmountComponentAtNode(document.getElementById('con'))
				ReactDOM.render(<Qita/>,document.getElementById('con'));
				break;
		}
	},
	render:function(){
		return(
			<div>
				<h1 onClick={this.tap} title="shouye">首页</h1>
				<h1 onClick={this.tap} title="about">关于</h1>
				<h1 onClick={this.tap} title="qita">其他</h1>
			</div>
		)
	}
})

var Shouye = React.createClass({
	render:function(){
		return(
			<h2>这是首页内容</h2>
		)
	}
})
var About = React.createClass({
	render:function(){
		return(
			<h2>这是关于</h2>
		)
	}
})
var Qita = React.createClass({
	render:function(){
		return(
			<h2>这是其他</h2>
		)
	}
})
ReactDOM.render(<Demo/>,document.getElementById('out'))