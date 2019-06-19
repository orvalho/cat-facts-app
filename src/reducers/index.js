import {combineReducers} from 'redux';

import factsReducer from 'reducers/factsReducer';

export default combineReducers({facts: factsReducer});
