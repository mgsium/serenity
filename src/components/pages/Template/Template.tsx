import React from "react";
import { Link } from "react-router-dom";
import { cx } from "emotion";
import { Container, Row, Col } from "react-bootstrap";

import Styles from "./TemplateStyles";

import Sidebar from "../../widgets/dashboardSidebar/dashboardSidebar";

type Props = {};
type State = {};

export default class notificationFeed extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    
    }

    render() {
        return(
            <Container fluid>
                <Row>
                    <Sidebar/>
                    <Col xs={2}></Col>
                    <Col>
                        {this.props.children}
                    </Col>
                </Row>
            </Container>
        )
    }
}