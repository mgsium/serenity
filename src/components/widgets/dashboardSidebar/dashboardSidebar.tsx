import React from "react";
import { Link } from "react-router-dom";
import { cx } from "emotion";
import { Container, Row, Col, Button } from "react-bootstrap";

import Styles from "./dashboardSidebarStyles";

type Props = {};
type State = {};

export default class notificationFeed extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    
    }

    render() {
        return(
            <Col xs={2} style={{ padding:0, backgroundColor:"#8BD3DD" }} className={ cx( Styles.sidebarStyles )}>
                <div>
                    <Button>
                        yes
                    </Button>
                </div>
            </Col>
        )
    }
}