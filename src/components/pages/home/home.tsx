import React from "react";
import { cx } from "emotion";
import gs from "../../gs";

type Props = {};
type State = {};

export default class Home extends React.Component<Props, State> {
    render() {
        return (
            <div className={cx(gs.tabular_center)} style={{ height: "100vh" }}>
                <div style={{ display: "table-cell", verticalAlign: "middle", fontFamily: "Work Sans, sans-serif" }}>
                    Serenity
                </div>
            </div>
        )
    }
}