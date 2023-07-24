import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/site.css";
import Logo from "../assets/image/logo.png"

export default function Headers(){
    return(
        <div className="header">
            <Container>
                <Row>
                    <Col xs={{span:6, offset:3}} sm={{span:2, offset:0}} className="my-auto text-center p-3">
                        <img src={Logo} className="w-100" alt="mzf"></img>
                    </Col>
                    <Col xs="12" sm="6" className="text-center text-sm-start p-3">
                        <h1 className="text-light my-0">M Zulfikar Firdaus</h1>
                        <h2 className="text-light">Fullstack Developer</h2>
                        <small className="text-light">mfirdaus.zulfikar@gmail.com <span className="text-warning">|</span></small>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}