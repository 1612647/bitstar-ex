//Import React lib
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//Import scss
import './index.scss';

//Import App component
import App from './components/App';

// Import Redux store
import { createStore } from 'redux';
import reducers from './store/reducers';

//Import provider to connect redux with view
import { Provider } from 'react-redux';

//create store
const store = createStore(reducers);

ReactDOM.render(
    //Declare provide for redux
    <Provider store={store}>
        <App />
    </Provider>,

    // <App />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
// serviceWorker.register();
