import { combineReducers } from 'redux'
import headerReducer from './headerReducer';
import mainReducer from './mainReducer';
import directionReducer from './directionReducer';
import reviewReducer from './reviewReducer';
import benefitReducer from './benefitReducer';
import faqReducer from './faqReducer';
import contactReducer from './contactReducer';
import {reducer as formReducer} from 'redux-form';
import priceReducer from "./priceReducer";
import countUpReducer from "./countUpReducer";

const rootReducer = combineReducers({
    headerReducer,
    mainReducer,
    directionReducer,
    reviewReducer,
    benefitReducer,
    faqReducer,
    contactReducer,
    form: formReducer,
    priceReducer,
    countUpReducer
});

export default rootReducer;