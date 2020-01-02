import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';
import _ from 'lodash';

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools()
);

store.subscribe(_.throttle(() => {
    saveState({
      count: store.getState().count,
      notes: store.getState().notes
    });
  }, 1000));

export default store