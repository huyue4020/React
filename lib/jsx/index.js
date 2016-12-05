		var Header = React.createClass({
			render:function(){
				var _st = this.st;
				return(
					<header style={_st.header}>react组件</header>
				)
			}
		})
		Header.prototype.st={
			header:{
				backgroundColor:'#FA9D3E',
				fontSize:'20px',
				height:'44px',
				lineHeight:'44px',
				textAlign:'center'
			}
		}
		
		var Nav = React.createClass({
			render:function(){
				var _st = this.st;
				return(
					<nav>
						<ul style={_st.nav}>
							<li style={_st.nav_li}>风景</li>
							<li style={_st.nav_li}>图片</li>
							<li style={_st.nav_li}>艺术</li>
							<li style={_st.nav_li}>音乐</li>
						</ul>
					</nav>
				)
			}
		})
		Nav.prototype.st={
			nav:{
				backgroundColor:'yellow',
				color:'red',
				display:'flex',
				justifyContent:'space-around',
				width:'100%',
				textAlign:'center',
				height:'44px'
			},
			nav_li:{
				listStyle:'none',
				backgroundColor:'yellow',
				float:'left',
				width:'25%',
				backgroundColor:'#A6EEF9',
				borderRadius:'30%',
				lineHeight:'44px',
				border:'1px solid #000'
			}
		}

		var Demo = React.createClass({
			render:function(){
				var _st = this.st;
				return(
					<div style={_st.box}>
						<Header/>

						<Nav/>

						<section style={_st.content_box}>
							<ul style={_st.content}>
								<il style={_st.content_li}>
									<img src="pic1.jpg" style={_st.content_li_img} />
									<span style={_st.content_li_txt}>第一张图片</span>
								</il>
								<il style={_st.content_li}>
									<img src="pic1.jpg" style={_st.content_li_img} />
									<span style={_st.content_li_txt}>第二张图片</span>
								</il>
								<il style={_st.content_li}>
									<img src="pic1.jpg" style={_st.content_li_img} />
									<span style={_st.content_li_txt}>第三张图片</span>
								</il>
								<il style={_st.content_li}>
									<img src="pic1.jpg" style={_st.content_li_img} />
									<span style={_st.content_li_txt}>第三张图片</span>
								</il>
								<il style={_st.content_li}>
									<img src="pic1.jpg" style={_st.content_li_img} />
									<span style={_st.content_li_txt}>第三张图片</span>
								</il>
								<il style={_st.content_li}>
									<img src="pic1.jpg" style={_st.content_li_img} />
									<span style={_st.content_li_txt}>第三张图片</span>
								</il>
							</ul>
						</section>
						<footer>
							<ul style={_st.footer}>
								<li style={_st.footer_li}>首页</li>
								<li style={_st.footer_li}>内容</li>
								<li style={_st.footer_li}>其他</li>
							</ul>
						</footer>
					</div>
				)
			}
		})
		Demo.prototype.st={
			box:{
				display:'flex',
				flexDirection:'column',
				width:'100%',
				height:'100%'
			},
			content_box:{
				width:'100%',
				height:'100%',
				backgroundColor:'#e9e9e9',
				overflow:'scroll',
				flex:'1'
			},
			content:{
				width:'100%'
			},
			content_li:{
				listStyle:'none',
				display:'flex',
				justifyContent:'space-around',
				padding:'20px'

			},
			content_li_img:{
				width:'35%',
				height:'35%',
				paddingRight:'20px'
			},
			content_li_txt:{
				flex:'1',
				lineHeight:'54px'
			},
			footer:{
				backgroundColor:'#CBC6C6',
				color:'#000',
				display:'flex',
				justifyContent:'space-around',
				width:'100%',
				textAlign:'center',
				height:'44px',
				position:'flex',
				bottom:'0px'
			},
			footer_li:{
				listStyle:'none',
				float:'left',
				width:'25%',
				lineHeight:'44px'
			}
		}

		
		ReactDOM.render(<Demo/>,document.getElementById('out'))