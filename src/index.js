import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import BookList from './components/book_list';
import BookDetail from './components/book_detail';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/* <App /> */}
    <div>
    <BookList/>
    <BookDetail/>
    </div>
  </Provider>
  , document.querySelector('.container'));
