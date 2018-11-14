import React from 'react'
import logoImg from './top_1.png'
import {style} from 'typestyle'

//在这里写css,保持scope
const headerStyle = style({
    backgroundColor: "#282c4f",
    borderBottom: "1px solid #666",
    $nest:{
        '& > img':{
            marginRight: "20px",
            marginLeft: "5px",
            verticalAlign:"middle",
            border:"0"
        }
    }
})
const headerContainer = style({
    lineHeight:"60px",
    color:"fff",
    position:"fixed",
    width:"100%",
    zIndex:"99999",
    top:"0",
    height:"60px",
    borderTop:"1px solid #3c425a",
    borderBottom:"2px solid #1c223b",
    background:"#292f4a"
})
const headerCtrlSpan = style({
    color:"#fff",
    fontSize:"14px"
})

class Header extends React.PureComponent {
    render(){
        return (
            <header className={headerStyle}>
                <div className={headerContainer}>
                    <div className="header-ctrl">
                        <div className="col-md-12 col-sm-12 col-lg-12">
                            <a href="#/">
                                <img src={logoImg} alt=""/>
                                <span className={headerCtrlSpan}>数据留存管理系统</span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

//封装成装饰器给其他组件使用
export function AddHeader(Comp) {
    class WapComp extends React.Component {
        render(){
            return (
                <div>
                    <Header/>
                    <Comp {...this.props}/>
                </div>
            )
        }
    }
    return WapComp
}