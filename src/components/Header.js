import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default bg-header" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand">iTjob.com</a>
                        </div>
                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a>All Job</a></li>
                                <li><a>Comppany Reviews</a></li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown">Other <b className="caret" /></a>
                                    <ul className="dropdown-menu">
                                        <li><a>Blog</a></li>
                                        <li><a>Hot Job</a></li>
                                    </ul>
                                </li>
                                <li><a href="#"><span className="glyphicon glyphicon-user" /> Sign Up</a></li>
                                <li><a href="#"><span className="glyphicon glyphicon-log-in" /> Login</a></li>
                            </ul>
                        </div>
                        <div  className="collapse navbar-collapse navbar-ex1-collapse">
                            <form className="navbar-form navbar-center full-width-input" role="search">
                                <div className="">
                                    <input type="text" className="" placeholder="Keyword skill (Java, iOS...), Job Title, Company..." />
                                    <select className="location">
                                        <option value="loca">Location</option>
                                        <option value="dana">Da Nang</option>
                                        <option value="hcm">Tp. Ho Chi Minh</option>
                                        <option value="hano">Ha Noi</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <button type="submit" className="btn-search" >Search</button>
                                </div>

                            </form>
                        </div>
                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav navbar-left txt-cl">
                                <li><a>Tester</a></li>
                                <li><a>Java</a></li>
                                <li><a>PHP</a></li>
                                <li><a>.NET</a></li>
                                <li><a>Android</a></li>
                                <li><a>iOS</a></li>
                                <li><a>Business Analyst</a></li>
                                <li><a>Database</a></li>
                                <li><a>Rails</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Header;
