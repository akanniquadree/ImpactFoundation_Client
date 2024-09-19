import react from "react"
import "./topbar.css"
function TopBar (props){
    return(
        <div className="topbar">
            <div className="topbar_container">
                <div className="topbar_right">
                    <img className="logo" src="/images/logo1.png" alt="TGIF" title="TGIF" />
                </div>
                <div className="topbar_left">
                    <div className="topbarIcon_container">
                        <i className="fa fa-bell-o"></i>
                        <span className="topbarIcon_badge">2</span>
                    </div>
                    <div className="topbarIcon_container">
                        <i className="fa fa-globe"></i>
                        <span className="topbarIcon_badge">2</span>
                    </div>
                    <div className="topbarIcon_container">
                        <i className="fa fa-cog"></i>
                    </div>
                    <div className="topbarIcon_container">
                        <i className="fa fa-user"></i>
                    </div>
                </div>  
            </div>
            
        </div>
    )
} 

export default TopBar;