import Counter from "./counter";
import IsLogged from "./isLoggerd";
import {combineReducers} from 'redux';

const allRed = combineReducers({
    cntr: Counter, log:IsLogged
})

export default allRed;