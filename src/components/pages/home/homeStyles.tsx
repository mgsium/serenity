import { css, keyframes } from "emotion";

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
`

const Styles = {
    landingLogo: css`
        position: absolute;
        top: 50%;
        left: 50%;
        height: 90vh;
        width: 90vh;    
        zIndex: -10;
    `,

    landingText: css`
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
    `,

    titleStyle: css`
        font-weight: 700;
        font-size: 58px;
        color: #8BD3DD;
        letter-spacing: 0.03em;
    `,

    subtitleStyle: css`
        font-size: 47px;
        color: #282C2D;
        letter-spacing: 0.03em;
        line-spacing: 2px;
    `
}

export default Styles;