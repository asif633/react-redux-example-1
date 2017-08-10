import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import WeatherReducer from './reducer_weather';
import PostsReducer from "./reducer_posts";
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  books: BooksReducer,
  activeBook: ActiveBook,
  weather: WeatherReducer,
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
