import React from "react";
import { Link } from "react-router-dom";
import { cx } from "emotion";
import gs from "../../gs";
import { Button } from "react-bootstrap";
import netlifyIdentity from "netlify-identity-widget";
import $ from "jquery";

type Props = {};
type State = {};

export default class Home extends React.Component<Props, State> {
    componentDidMount() {
        netlifyIdentity.init();
        // Redirect if the user is already authenticated
        const user = netlifyIdentity.currentUser();
        if (!!user) { $("#link-to-home").trigger("click"); }
    }
    render() {
        return (
            <div className={cx(gs.tabular_center)} style={{ height: "100vh" }}>
                <div className="text-center" style={{ display: "table-cell", verticalAlign: "middle", fontFamily: "Work Sans, sans-serif" }}>
                    <h2 style={{ fontWeight: "bold" }}>Serenity</h2>
                    <h6 style={{ color: "#666" }}>Notifications without the Stress.</h6>
                    <br/>
                    <Button 
                        variant="light" 
                        style={{ boxShadow: "0 .125rem .15rem rgba(0,0,0,.12)" }}
                        onClick={() => { netlifyIdentity.open(); }}
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