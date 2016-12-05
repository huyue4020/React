var Demo=React.createClass({
//	声明默认属性
	getDefaultProps:function(){
		return{
			res:'hi nihao',
			res1:[1,2,3]
		}
	},
	render:function(){
		var a='hello world'
		console.log(this.props)
		return(
			<div>
				<h1>属性</h1>
				<h2>{a}</h2>
				{/*<h2>这是属性值:{this.props.name}</h2>
				<h2>数组属性值:{this.props.n[1]}</h2>
				<h2>对象属性值:{this.props.nn.name}</h2>
				<h2>合并数组属性值:{this.props.nnn[1][2]}</h2>
			<h2>合并对象属性值:{this.props.na.bb[1]}</h2>*/}
				<h2>{this.props.name}</h2>
				<h2>默认属性值:{this.props.res1[2]}</h2>
			</div>
		)
	}
})
var b='react';
var c=[1,2,3];
var d={name:'小明',age:'22'};
var arr=['react1',[4,5,6],{name:'小李'}];
var obj={
	aa:'react2',
	bb:[11,22],
	cc:{name:'qqqq'}
}
var e='hello nihao'
ReactDOM.render(<Demo {...d}/>,document.getElementById('out'))

/*
属性
1/数据挂载－－｛数据变量名｝
2/属性数据 可以是js的基本数据类型
在渲染组建标签内通过  属性名＝｛数据名｝ 
组件内部  通过 this。props获取－－对象形式－－。属性名－－
具体数据取值参考数据类型的取值方法

展开式
｛...数据名｝－－数据要是对象形式（不是对象会自动拆分对象形式）
this。props。具体数据上的对象获取

声明默认属性－－getDefaultProps函数－－返回对象－－设置属性
（属性在获取过程中没有方法进行二次修改）










*/


