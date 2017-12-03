import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , combineReducers} from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import annotation from './store/reducers/annotation';

const rootReducer = combineReducers({
    annotation
});
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();