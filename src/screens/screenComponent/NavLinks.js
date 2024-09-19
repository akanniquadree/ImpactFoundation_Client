import React from 'react'
import { Link } from 'react-router-dom';

function NavLinks({extraClassName}) {
    
    return (
        <div>
            <ul>
                                                <li className="active ">
                                                    <Link to="/">Home</Link>
                                                </li>
                                                <li>
                                                <a href="#none">project</a>
                                                        <ul className="dropdown-menu-item">
                                                            <li>
                                                                <Link to="/project">project</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/donate">donate now</Link>
                                                            </li>
                                                        </ul>
                                                </li>
                                                <li>
                                                    <Link to="/event">events</Link>
                                                
                                                </li>
                                                <li>
                                                    <Link to="/blog">Blog</Link>
                                                </li>
                                                <li>
                                                    <Link to="#none">pages</Link>
                                                    <ul className="dropdown-menu-item">
                                                        <li>
                                                            <Link to="/about">about</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/gallery">gallery</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/volunteer">
                                                                become a volunteer
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/team">our team</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/sponsors">sponsors</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/sponsor">become a sponsor</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="/contact">contact</Link>
                                                </li>
                                            </ul>
  
        </div>
    )
}

export default NavLinks
