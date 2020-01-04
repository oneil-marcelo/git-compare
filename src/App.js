import React, { Fragment } from 'react';

import GlobalStyle from "./styles/global";
import Main from './pages/Main'

const App = () => {

    return (
        <Fragment>
            <GlobalStyle />
            <Main />
        </Fragment>
    );
}

export default App;