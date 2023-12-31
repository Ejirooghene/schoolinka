import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
    :root {
        --mobile: 768px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
    }
`

export default GlobalStyle;