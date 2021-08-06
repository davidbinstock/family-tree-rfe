import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { ReactFlowContainer } from '../../components/ReactFlowContainer';
import styles from "./TreeViewer.module.css";





class TreeViewer extends Component {
    state = {

    }



    render() {
        return (
            <Container className="mx-auto">
                <Row className="mb-0 text-center">
                    <h1 className="display-4 text-center">FamilyTree</h1>
                    <Link to="/" className="btn btn-primary btn-lg btn-block my-4">Back to Main</Link>
                </Row>                         
                <Row className="justify-content-center">
                    
                    <Col xs={12} md={12} xl={12}>
                        <div className={styles.tree}>
                        <ReactFlowContainer />
                        </div>
                    </Col>
                </Row>                            
            </Container>
                
        )
    }


}

export default TreeViewer;