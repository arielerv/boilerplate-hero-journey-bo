import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from 'store/reducers';
import rootSaga from 'store/sagas';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const middlewares = [routerMiddleware(history), sagaMiddleware];

const { NODE_ENV } = process.env;

const enhancer =
  NODE_ENV !== 'production'
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

const store = createStore(createRootReducer(history), enhancer);

sagaMiddleware.run(rootSaga);

export default store;
