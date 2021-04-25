import { css } from "emotion";

const Styles = {
    sidebarStyles: css `
        height: 100vh;
        min-width: 6vw;
        background: #FFFFFF;
        text-align: center;
        display: none;
        padding: 0;
        position: fixed;
        box-shadow: 5px 0px 8px rgba(0, 0, 0, 0.25);


        @media(min-width: 900px) {
            display: block;
        }
    `
}

export default Styles;