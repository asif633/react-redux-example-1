import axios from 'axios';

export function selectBook(book){
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

const API_KEY = 'f2b7da76ac4e4b72c963df62a72a8182';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

export const FETCH_POSTS = 'FETCH_POSTS';
const BLOG_URL = 'http://reduxblog.herokuapp.com/api';
const BLOG_API_KEY = '?key=PAPERCLIP1234';

export function fetchPosts(){
    
    const request = axios.get(`${BLOG_URL}/posts${BLOG_API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export const CREATE_POST = 'CREATE_POST';
export function createPost(values, callback){
    const request = axios.post(`${BLOG_URL}/posts${BLOG_API_KEY}`, values).then(
        () => callback()
    );
    return {
        type: CREATE_POST,
        payload: request
    };
}

export const FETCH_POST = 'FETCH_POST';

export function fetchPost(id){
    const request = axios.get(`${BLOG_URL}/posts/${id}${BLOG_API_KEY}`);
    return {
        type: FETCH_POST,
        payload: request
    };
}

export const DELETE_POST = 'DELETE_POST';

export function deletePost(id, callback){
    const request = axios.delete(`${BLOG_URL}/posts/${id}${BLOG_API_KEY}`).then(
        () => callback()
    );
    return {
        type: DELETE_POST,
        payload: id
    };
}