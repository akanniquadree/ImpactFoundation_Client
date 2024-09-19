import React from 'react'
import { Link } from 'react-router-dom'
import "./sidebar.css"
function SideBar(props) {
    return (
        <div>
            <div className="sidebar">
                <div className="sidebar_wrapper">
                    <div className="sidebar_menu">
                        <h5 className="sidebar_tittle">DashBoard</h5>
                        <ul className="sidebar_list">
                                <li className="sidebar_list_item active">
                                    <Link to="/"><i className="fa fa-list sidebarIcon"></i>
                                    Home</Link>
                                    
                                </li>
                                <li className="sidebar_list_item">
                                    <i className="fa fa-area-chart sidebarIcon"></i>
                                    Analytic
                                </li>
                                <li className="sidebar_list_item">
                                    <i className="fa fa-calendar-check-o sidebarIcon"></i>
                                    Event
                                </li>
                                <li className="sidebar_list_item">
                                    <i className="fa fa-rss-square sidebarIcon"></i>
                                    Blog
                                </li>
                                <li className="sidebar_list_item">
                                    <i className="fa fa-users sidebarIcon"></i>
                                    Team
                                </li>
                            </ul>   
                    </div>
                    <div className="sidebar_menu">
                        <h5 className="sidebar_tittle">Upload</h5>
                        <ul className="sidebar_list">
                                <li className="sidebar_list_item">
                                   <Link to="/admin/gallery"> <i className="fa fa-list sidebarIcon"></i>
                                    Gallery</Link>
                                </li>
                                <li className="sidebar_list_item">
                                    <Link to="/admin/team"><i className="fa fa-area-chart sidebarIcon"></i>
                                    Team</Link>
                                </li>
                                <li className="sidebar_list_item">
                                    <Link to="/admin/event"><i className="fa fa-calendar-check-o sidebarIcon"></i>
                                    Event</Link>
                                </li>
                                <li className="sidebar_list_item">
                                    <Link to="/admin/blog"><i className="fa fa-rss-square sidebarIcon"></i>
                                    Blog</Link>
                                </li>
                                <li className="sidebar_list_item">
                                    <Link to="/admin/sponsor"><i className="fa fa-users sidebarIcon"></i>
                                    Sponsor</Link>
                                </li>
                                <li className="sidebar_list_item">
                                    <Link to="/admin/project"><i className="fa fa-users sidebarIcon"></i>
                                    Project</Link>
                                </li>
                            </ul>   
                    </div>
                    <div className="sidebar_menu">
                        <h5 className="sidebar_tittle">Notification</h5>
                        <ul className="sidebar_list">
                                <li className="sidebar_list_item">
                                    <i className="fa fa-list sidebarIcon"></i>
                                    Mail
                                </li>
                                <li className="sidebar_list_item">
                                    <i className="fa fa-area-chart sidebarIcon"></i>
                                    Feedback
                                </li>
                                <li className="sidebar_list_item">
                                    <i className="fa fa-calendar-check-o sidebarIcon"></i>
                                    Messages
                                </li>
                                
                            </ul>   
                    </div>
                    <div className="sidebar_menu">
                        <h5 className="sidebar_tittle">Staff</h5>
                        <ul className="sidebar_list">
                                <li className="sidebar_list_item">
                                    <i className="fa fa-list sidebarIcon"></i>
                                    Home
                                </li>
                                <li className="sidebar_list_item">
                                    <i className="fa fa-area-chart sidebarIcon"></i>
                                    Manage
                                </li>
                                <li className="sidebar_list_item">
                                    <i className="fa fa-calendar-check-o sidebarIcon"></i>
                                    Sponsors
                                </li>
                                <li className="sidebar_list_item">
                                    <i className="fa fa-rss-square sidebarIcon"></i>
                                    Volunteer
                                </li>
                                <li className="sidebar_list_item">
                                    <i className="fa fa-users sidebarIcon"></i>
                                    Team
                                </li>
                            </ul>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
