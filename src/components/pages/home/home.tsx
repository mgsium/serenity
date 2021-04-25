import React from "react";
import { Link } from "react-router-dom";
import { cx } from "emotion";
import gs from "../../gs";
import { Button } from "react-bootstrap";
import netlifyIdentity from "netlify-identity-widget";
import $ from "jquery";
import { motion } from "framer-motion"
import { Helmet } from "react-helmet";
import Typed from "typed.js";

import Styles from "./homeStyles"

type Props = {};
type State = {};

export default class Home extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    
    }

    componentDidMount() {
        netlifyIdentity.init();
        // Redirect if the user is already authenticated
        const user = netlifyIdentity.currentUser();
        if (!!user) { $("#link-to-home").trigger("click"); }

        var typed = new Typed('#typed', {
            strings: ['Stress', 'Hassle', "Kerfuffle", "Trouble", "Difficulty"],
            smartBackspace: true,
            loop: true,
            loopCount: Infinity,
            typeSpeed: 100,
            backSpeed: 100,
            shuffle: true,
            backDelay: 2000
        });
    }

    render() {
        return (
            <div className={cx(gs.tabular_center)} style={{ height: "100vh" }}>
                <Helmet>
                    <style>{'body { overflow: hidden; }'}</style>
                </Helmet>
                <motion.img src="/public/assets/png/SerenityLogoSquare.png"
                    initial={{ x:"-50%", y:"-50%" }}
                    animate={{ rotate: 180 }}
                    transition={{ repeat: Infinity, duration: 40, type: "tween" }}
                    className={ cx( Styles.landingLogo ) }
                >
                </motion.img>
                <div className={ cx( Styles.landingText, "text-center" ) }style={{ display: "table-cell", verticalAlign: "middle", fontFamily: "Work Sans, sans-serif", zIndex:10, position: "absolute" }}>
                    <h2 className={ cx( Styles.titleStyle )}>Serenity</h2>
                    <br/>
                    <h6 className={ cx( Styles.subtitleStyle )}>Notifications without<br/>the <span id="typed" style={{ fontWeight:"bold" }}></span></h6>
                    
                    <br/>
                    <Button 
                        variant="light" 
                        style={{ boxShadow: "0 .125rem .15rem rgba(0,0,0,.12)", borderRadius: "15px" }}
                        onClick={() => { netlifyIdentity.open(); }}
                        size="lg"
                    >
                        Get Started
                    </Button>
                    {/* Hidden Link */}
                    <Link id="link-to-home" to="/home" hidden>Home</Link>
                </div>
            </div>
        )
    }
}