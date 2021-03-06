import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Styles from "./AppStyles";
import Home from "./components/pages/home/home";
import NotificationFeed from "./components/pages/dashboard/notificationFeed/notificationFeed";

type State = {};
type Props = {};

export default class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }
 
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* Paths */}
                    <Route path="/"                 component={Home}                exact/>
                    <Route path="/notifications"     component={NotificationFeed}    exact/>
                </Switch>
            </BrowserRouter>
        )
    }
}