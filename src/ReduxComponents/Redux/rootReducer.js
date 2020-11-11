import cakeReducer from './cakes/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducers'
import {combineReducers} from 'redux';
import reducer from './user/userReducers';


const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer,
    users: reducer
})

export default rootReducer