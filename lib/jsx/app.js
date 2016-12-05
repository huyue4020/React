// 创建组件Demo
var Demo = React.createClass({
	getDefaultProps:function(){
			return {
				res:'Hi 你好！',
				res1:'222'
			}
		},
	render:function(){
		var _st = this.st;
//		var a = '数据传递载体';
		console.log(this.props);
		return (
			<div>
				{/*<h1 style={_st.box}>属性</h1>
				<h2>{a}</h2>
				<h3>字符串属性值：{this.props.s}</h3>
				<h4>数组属性值：{this.props.a[2]}</h4>
				<h5>对象属性值：{this.props.o.name}</h5>
				<h5>整合的数组存多个属性：{this.props.arr[1][2]}</h5>
			<h5>整合的对象存多个属性：{this.props.obj.str}</h5>*/}
				<h2>扩展：{this.props.name}</h2>
				<h2>组件内部提供的声明默认属性:{this.props.res}</h2>
			</div>
		)
	}
})
Demo.prototype.st = {
	box:{
		width:'100%',
		height:'100%',
		backgroundColor:'#e9e9e9',
		color:'red'
	}
}

// 渲染组件Demo,赋属性的时候要用标签

var str = '组件的属性赋值';
var arr = [1,2,3];
var obj = {
	name:'大锤',
	age:'24'
}

// 整合多个属性在一个属性上（使用数组，对象）
var arrNew = ['react',[4,5,6],{name:'小锤'}];
var objNew = {
	str:'react2',
	arr:[77,88],
	obj:{
		name:'大锤'
	}
}
//扩展写法
var e = 'hellow world';
// ReactDOM.render(<Demo s={str} a={arr} o={obj} arr={arrNew} obj={objNew}/>,document.getElementById('out'))
ReactDOM.render(<Demo {...obj}/>,document.getElementById('out'))