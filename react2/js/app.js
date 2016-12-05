var Demo = React.createClass({
		getDefaultProps:function(){
			console.log('设置默认属性')
			return{
				
			}
		},
		getInitialState:function(){
			console.log('设置默认状态')
			return{
				
			}
		},
		//此函数不能获取真实的额dom，运行在组件加载前
		componentWillMOunt:function(){
			console.log('组件即将加载允许的函数')
		},
		render:function(){
			console.log('组建的创建')
			
		},
		componentDidMount:function(){
			console.log('组件加载成功')
		}
	});
ReactDOM.render(<Demo/>,document.getElementById('out'))