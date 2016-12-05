var $=(function(){
	var ajax=function(url,callback){
		var xhr=new XMLHttpRequest();
		xhr.open('get',url,true);
		xhr.send();
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				callback(eval('('+xhr.responseText+')'))
			}
		}
	}
	return{
		http:ajax
	}
})()

// $.http('test1.json',function(data){
// 	console.log(data.title)
// })
var style={
	out:{width:'200px',height:'100px',border:'1px solid red',marginTop:'30px'},
	aa:{color:'blue',fontSize:'30px'}
}

var getMixin = {
	getA:function(){
		alert('mixinsA');
	},
	getB:function(){
		alert('mixinsB');
	}
};
	
var Demo = React.createClass({
	mixins:[getMixin],
	getDefaultProps:function(){
		return{
			url:'test1.json'
		}
	},
	getInitialState:function(){
		return{
			res:''
		}
	},
	componentWillMount:function(){
		var _this=this;
		$.http(this.props.url,function(data){
			_this.setState({res:data.title})
		})
	},
	render:function(){
		var jsx=[];
		for(var i=0;i<this.state.res.length;i++){
			jsx.push(
				<Child name={this.state.res[i]}/>
			)
		}
		return(
			<div onClick={this.getA}>
				{jsx}
			</div>
		)
	}
})
var Child =React.createClass({
	render:function(){
		return(
			<div style={style.out}>
				<p style={style.aa}>{this.props.name}</p>
			</div>
		)
	}
})
ReactDOM.render(<Demo/>,document.getElementById('out'));