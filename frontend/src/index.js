import React from 'react';
import ReactDOM from 'react-dom';
import { ToastProvider} from 'react-toast-notifications'
import {BrowserRouter as Router} from 'react-router-dom'

import {CurrentUserProvider} from 'contexts/currentUser'
import {CurrentBasketProvider} from 'contexts/currentBasket'
import {CurrentSearchProvider} from 'contexts/currentSearch'
import CurrentUserChecker from 'components/currentUserChecker'
import CurrentBasketChecker from 'components/currentBasketChecker'
import Routes from 'routes';




const App = () => {
    return (
        <ToastProvider>
            <CurrentUserProvider>
                <CurrentSearchProvider>
                    <CurrentBasketProvider>
                        <CurrentBasketChecker>
                            <CurrentUserChecker>
                                <Router>
                                    <Routes/>
                                </Router>
                            </CurrentUserChecker>
                        </CurrentBasketChecker>
                    </CurrentBasketProvider>
                </CurrentSearchProvider>
            </CurrentUserProvider>
        </ToastProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

