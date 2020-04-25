import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/search.reducer';
import App from './views/App';
import './styles/style.scss';
const store = createStore(rootReducer);

render(<Provider store={store}>
    <App />
</Provider>,
    document.getElementById("app"));