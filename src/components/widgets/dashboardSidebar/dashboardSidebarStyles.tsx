import { css } from "emotion";

const Styles = {
    sidebarStyles: css `
        height: 100vh;
        min-width: 6vw;
        background: #8BD3DD;
        text-align: center;
        display: none;
        padding: 0;
        position: fixed;
        box-shadow: 5px 0px 8px rgba(0, 0, 0, 0.25);


        @media(min-width: 900px) {
            display: block;
        }
    `,

    logoStyles: css`
        font-family: Work Sans;
        font-size: 42px;
        font-weight: 900;
        letter-spacing: 0.03em;
        color: #282C2D;
        margin-left: 14px;
    `,

    buttonText: css`
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        font-family: Work Sans;
        font-size: 27px;
        letter-spacing: 0.01em;
        color: #FFFFFF;
        text-align: right;
        line-height: 32px;
    `,

    verticalCenterArrow: css`
        position: absolute;
        top: 39%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    `,

    unselectedRowStyles: css`
        height: 16vh;
        width: 105%;
    `,

    selectedRowStyles: css`
        height: 16vh;
        width: 105%;
        backgroundColor: #68B9C4;
        boxShadow: inset 0px 0px 4px 3px rgba(0, 0, 0, 0.25);
    `
}

export default Styles;