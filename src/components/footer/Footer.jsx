import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import './Footer.css';

const { Footer } = Layout;

function AppFooter() {
    return (
        <Footer className="footer-location">
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <div className="logo">
                        <img src="./image/Lantern.png" alt="logo" width={200} height={120} />
                    </div>
                    <div>
                        <div>
                            <p>Location</p>
                        </div>
                        <div>
                            <p>Street 11 city country</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Open Hours</p>
                        </div>
                        <div>
                            <p>11 am - 3 am</p>
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                    <div>
                        <div>
                            <Link to={'/'} className={'links'}>
                                Home
                            </Link>
                        </div>
                        <div>
                            <Link to={'/about'} className={'links'}>
                                About us
                            </Link>
                        </div>
                        <div>
                            <Link to={'/menu'} className={'links'}>
                                Our menu
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                    <div>
                        <div>
                            <Link to={'/pages'} className={'links'}>
                                Pages
                            </Link>
                        </div>
                        <div>
                            <Link to={'/blog'} className={'links'}>
                                Blog
                            </Link>
                        </div>
                        <div>
                            <Link to={'/contact'} className={'links'}>
                                Contact us
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <div>
                        <div>
                            <p>+777777</p>
                        </div>
                        <div>
                            <p>gmailgmail@gmail.com</p>
                        </div>
                    </div>
                    <div className="social-media-logo">
                        <div>
                            <a href="https://www.instagram.com">
                                <img src="./image/insta.svg" alt="Instagram" width={40} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com">
                                <img src="./image/logos_facebook.svg" alt="Facebook" width={40} />
                            </a>
                        </div>
                        <div>
                            <a href="https://telegram.org">
                                <img src="./image/logos_telegram.svg" alt="Telegram" width={40} />
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Footer>
    );
}

export default AppFooter;