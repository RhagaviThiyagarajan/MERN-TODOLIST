import {composeWithDevTools} from '@redux-devtools/extension';
import {applyMiddleware,createStore} from 'redux'



import rootReducer from './reducers/rootReducers';



const thunk=require('redux-thunk').default;
const store=createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));


    export default store;