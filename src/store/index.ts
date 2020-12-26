import { createStore, Store } from 'redux';
import { QuestionState } from './ducks/question/types';
import { TimeState } from './ducks/time/types'
import rootreducer from './ducks/rootReducer';

export interface ApplicationStore {
  question: QuestionState;
  time: TimeState
}

const store: Store = createStore(rootreducer);

export default store;
