import React from "react";
import { Link } from "react-router-dom";
import { cx } from "emotion";
import { Container, Row, Col } from "react-bootstrap";

import Styles from "./notificationFeedStyles";
import { Helmet } from "react-helmet";

import Template from "../../Template/Template";

type Props = {};
type State = {};

export default class notificationFeed extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    
    }

    render() {
        return(
            <div>
                <Template>
                    dnasjidnias
                </Template>
            </div>
        )
    }

}