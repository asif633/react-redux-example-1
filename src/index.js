import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';
import BookList from './components/book_list';
import BookDetail from './components/book_detail';
import WeatherApp from './components/weather_app';
import ReduxPromise from 'redux-promise';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import Navbar from './components/navbar';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/* <div>
    <BookList/>
    <BookDetail/>
    </div> */}
    <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/youtube" component={App} />
          <Route path="/weather" component={WeatherApp} />
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
