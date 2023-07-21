import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
    <Menu>
        <Menu.Item key="1">
            <Link to={'/'} className={'links'}>
                Home
            </Link>
        </Menu.Item>
        <Menu.Item key="2">
            <Link to={'/about'} className={'links'}>
                About us
            </Link>
        </Menu.Item>
        <Menu.Item key="3">
            <Link to={'/menu'} className={'links'}>
                Our menu
            </Link>
        </Menu.Item>
        <Menu.Item key="4">
            <Link to={'/about'} className={'links'}>
                Pages
            </Link>
        </Menu.Item>
        <Menu.Item key="5">
            <Link to={'/about'} className={'links'}>
                Blog
            </Link>
        </Menu.Item>
        <Menu.Item key="6">
            <Link to={'/about'} className={'links'}>
                Contact us
            </Link>
        </Menu.Item>
    </Menu>
);

const Header = () => {
    return (
        <>
            <div className={'header-location'}>
                <div className={'logo'}>
                    <img width={200} height={120} src={'./image/Lantern.png'} alt="Lantern Logo" />
                </div>
                <Menu mode="horizontal" className={'menu-items'}>
                    <Menu.Item key="1">
                        <Link to={'/'} className={'links'}>
                            Home
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to={'/about'} className={'links'}>
                            About us
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to={'/menu'} className={'links'}>
                            Our menu
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to={'/about'} className={'links'}>
                            Pages
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to={'/about'} className={'links'}>
                            Blog
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Link to={'/about'} className={'links'}>
                            Contact us
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
            <div className={'header-small'}>
                <div className={'logo'}>
                    <img width={200} height={120} src={'./image/Lantern.png'} alt="Lantern Logo" />
                </div>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                        Menu <DownOutlined />
                    </a>
                </Dropdown>
            </div>
        </>
    );
};

export default Header;