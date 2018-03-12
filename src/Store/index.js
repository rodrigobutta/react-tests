import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../Reducers';

// agrego Dev Tools Redux
import { composeWithDevTools } from 'redux-devtools-extension';

const middleWare = [];

middleWare.push(thunk)

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});
middleWare.push(loggerMiddleware)

// const store = createStore(
//   reducers,
//   {},
//   compose(
//     applyMiddleware(...middleWare)
//   )
// );

// agrego Dev Tools Redux
const store = createStore(
  reducers,
  {},
  composeWithDevTools(
    applyMiddleware(...middleWare)
  )
);


export default store;
