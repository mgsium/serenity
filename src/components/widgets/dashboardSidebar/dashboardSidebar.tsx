import React from "react";
import { Link } from "react-router-dom";
import { cx } from "emotion";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { ArrowRight } from "react-feather";

import Styles from "./dashboardSidebarStyles";

type Props = {};
type State = {
    selectedPage: 1 | 2 | 3
};

export default class notificationFeed extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        
        this.state={
            selectedPage: 1,
        }
    }

    render() {
        return(
            <Col xs={2} className={ cx( Styles.sidebarStyles )}>

                <Row style={{ height:"12vh" }}>
                    <motion.img src="/public/assets/png/SerenityLogo.png" whileHover={{ rotate: 90 }} style={{ display:"table", marginTop:"auto", marginBottom:"auto", height:"45px", marginLeft:30 }}></motion.img>
                    <span className={ cx( Styles.logoStyles )} style={{ display:"table", marginTop:"auto", marginBottom:"auto" }}>SERENITY</span>
                </Row>

                <div onClick={() => this.setState({ selectedPage: 1 })}>
                    <Row className={(this.state.selectedPage == 1) ? cx( Styles.selectedRowStyles) : cx( Styles.unselectedRowStyles )}>
                        <Col xs={9} style={{  }}>
                            <span className={ cx( Styles.buttonText )} style={{ right:"1vw" }}>
                                FEED
                            </span>
                        </Col>
                        <Col xs={3}>
                            <motion.div className={ cx( Styles.verticalCenterArrow )} initial={{ x:-8 }} whileHover={{ x:8 }}>
                                <ArrowRight color="white" size={32} />
                            </motion.div>
                        </Col>
                    </Row>
                </div>
                
                <div onClick={() => {this.setState({ selectedPage: 2 }), alert(this.state.selectedPage)} }>
                    <Row className={(this.state.selectedPage == 2) ? cx( Styles.selectedRowStyles) : cx( Styles.unselectedRowStyles ) }>
                        <Col xs={9} style={{  }}>
                            <span className={ cx( Styles.buttonText )} style={{ right:"1vw" }}>
                                CREATE<br/>NOTIFICATION
                            </span>
                        </Col>
                        <Col xs={3}>
                            <motion.div className={ cx( Styles.verticalCenterArrow )} initial={{ x:-8 }} whileHover={{ x:8 }}>
                                <ArrowRight color="white" size={32} />
                            </motion.div>
                        </Col>
                    </Row>
                </div>

                <div onClick={() => this.setState({ selectedPage: 3 })}>
                    <Row className={(this.state.selectedPage == 2) ? cx( Styles.selectedRowStyles) : cx( Styles.unselectedRowStyles )}>
                        <Col xs={9} style={{  }}>
                            <span className={ cx( Styles.buttonText )} style={{ right:"1vw" }}>
                                PLACEHOLDER
                            </span>
                        </Col>
                        <Col xs={3}>
                            <motion.div className={ cx( Styles.verticalCenterArrow )} initial={{ x:-8 }} whileHover={{ x:8 }}>
                                <ArrowRight color="white" size={32} />
                            </motion.div>
                        </Col>
                    </Row>
                </div>

            </Col>
        )
    }
}