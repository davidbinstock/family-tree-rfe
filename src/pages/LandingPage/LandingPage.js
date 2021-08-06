import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


// import styles from "./TreeViewer.module.css";


class TreeViewer extends Component {
    state = {

    }

    componentDidMount() {

    }

    render() {
        return (

            <Container>
                <Row className="jumbotron mb-5">
                    <h1 className="display-4 text-center">Welcome</h1>
                    <p className="lead text-center">Click a Button!</p>
                </Row>           
                <Row className="justify-content-center">
                    <Col xs={8} md={6} xl={4}>
                        <Link to="/tree" className="btn btn-primary btn-lg btn-block my-4">View Tree</Link>
                    </Col>
                </Row>                
                <Row className="justify-content-center">
                    <Col xs={8} md={6} xl={4}>
                        <Button className="btn btn-primary btn-lg btn-block my-4">Do Nothing</Button>
                    </Col>
                </Row>                            
            </Container>

        )
    }


}

export default TreeViewer;