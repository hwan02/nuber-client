import React from "react";
import { graphql } from "react-apollo";
import AppPresenter from "./AppPresenter";
import { IS_LOGGED_IN } from "./AppQueries";
import { ThemeProvider } from "../../typed-components";
import theme from '../../theme';
import GlobalStyle from "../../global-styles";


const AppContainer = ({data}:{data?:any}) => 
(
    <ThemeProvider theme={theme}>
        <React.Fragment>
            <GlobalStyle/>
            <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
        </React.Fragment>
    </ThemeProvider>
);

export default graphql(IS_LOGGED_IN)(AppContainer);