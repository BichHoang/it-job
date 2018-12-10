import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <div className="container-fluid bg-header">
                <div className="footer">
                    <div className="row">
                        <div className="col-xs-3 col-md-3 col-lg-3">Logo</div>
                        <div className="col-xs-2 col-md-2 col-lg-2 none-bullet">
                            <ul className="text-left ">
                                <li><h5>Useful link</h5></li>
                                <li><a>Home</a></li>
                                <li><a>All Jobs</a></li>
                                <li><a>Company Reviews</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-2 col-md-2 col-lg-2 none-bullet">
                            <ul className="text-left">
                                <li><h5>Company</h5></li>
                                <li><a>About Us</a></li>
                                <li><a>Terms of Service</a></li>
                                <li><a>Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-2 col-md-2 col-lg-2 none-bullet">
                            <ul className="text-left">
                                <li><h5>Hot Tag</h5></li>
                                <li><a>Java</a></li>
                                <li><a>Javascript</a></li>
                                <li><a>Design</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-3 col-md-3 col-lg-3 none-bullet">
                            <ul className="text-left">
                                <li><h5>Contact</h5></li>
                                <li>Phone: 0938984371</li>
                                <li>Address: 54 Nguyễn Lương Bằng, Đà Nẵng</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <hr/>
                            <div className="copyright">
                                <p>© Copyright 2018 <a href="#">Team Đồ Án</a>. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
