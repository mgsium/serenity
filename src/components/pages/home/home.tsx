import React from "react";
import { cx } from "emotion";
import gs from "../../gs";
import { Button } from "react-bootstrap";

type Props = {};
type State = {};

export default class Home extends React.Component<Props, State> {
    render() {
        return (
            <div className={cx(gs.tabular_center)} style={{ height: "100vh" }}>
                <div className="text-center" style={{ display: "table-cell", verticalAlign: "middle", fontFamily: "Work Sans, sans-serif" }}>
                    <h2 style={{ fontWeight: "bold" }}>Serenity</h2>
                    <h6 style={{ color: "#666" }}>Notifications without the Stress.</h6>
                    <br/>
                    <Button variant="light">
                        Get Started
                    </Button>
                </div>
            </div>
        )
    }
}