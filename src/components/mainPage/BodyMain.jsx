import "./BodyMain.css";
import {Row, Col, Divider, Button, Image} from "antd";
import Slider from "./Slider";
import React from "react";
import DataTimePicker from "./DateTimePicker";
import {Link} from "react-router-dom";

function Body() {
    return (
        <div>
            <Row className={"intro-location"}>
                <Col span={12}>
                    <div className={"intro-text-location"}>
                        <p>The people & drinks, food</p>
                        <p>For good friends & you</p>
                    </div>
                </Col>
                <Col span={12}>
                    <div className={"image-intro-location"}>
                        <Image src={"./image/inside1.jpg"} width={500}/>
                        <Image src={"./image/drinkwhite.jpg"} width={400}/>
                    </div>
                </Col>
            </Row>
            <Row className={"info-location"}>
                <Col span={8} className={"info-block"}>
                    <div className={"info-block-text"}>
                        <p>Location</p>
                    </div>
                    <div>
                        <p>Street 11 city country</p>
                    </div>
                </Col>
                <Col span={8} className={"info-block"}>
                    <div className={"info-block-text"}>
                        <p>Open Hours</p>
                    </div>
                    <div>
                        <p>Mon. to Fri. 9:00 AM - 23:00 PM</p>
                    </div>
                </Col>
                <Col span={8} className={"info-block"}>
                    <div className={"info-block-text"}>
                        <p>Reservation</p>
                    </div>
                    <div>
                        <p>gmailgmail@gmail.com</p>
                    </div>
                </Col>
            </Row>
            <Divider className={"photo-attachment"}/>
            <Row className={"drinks-offer-location"}>
                <Col span={8}>
                    <div className={"offer"}>Offer</div>
                    <div className={"drinks"}>Drinks</div>
                    <div className={"discount-text"}>
                        sometimes we make good discounts on our drinks
                    </div>
                    <div>
                        <Button className={"menu-button"}>
                            <Link to={"/menu"} className={"links"}>
                                Our menu
                            </Link>
                        </Button>
                    </div>
                </Col>
                <Col span={8} className={"block-offer-location"}>
                    <div className={"discount-text-number"}>Best offer!</div>
                    <div>
                        <Image src={"./image/promo.png"}/>
                    </div>
                </Col>
                <Col span={8} className={"block-offer-location"}>
                    <div>
                        <Image src={"./image/promo2.jpg"}/>
                    </div>
                    <div className={"discount-text-number"}>Best offer!</div>
                </Col>
            </Row>
            <Row>
                <Slider/>
            </Row>
            <Row>
                <div className={"book-text"}>
                    <p>Book</p>
                    <p className={"book-text-red"}>Your</p>
                    <p>Table</p>
                </div>
                <DataTimePicker/>
            </Row>
        </div>
    );
}

export default Body;