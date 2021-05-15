import { combineReducers } from 'redux';
import loginReducer from './login';
import infoReducer from './info';
import userReducer from './user';
import formReducer from './form';
import questionReducer from './question';
import zulipReducer from './zulip';
import answerReducer from './answer';

const rootReducers = combineReducers({
  login: loginReducer,
  info: infoReducer,
  user: userReducer,
  form: formReducer,
  questions: questionReducer,
  answer: answerReducer,
  zulip: zulipReducer,
});

export default rootReducers;
