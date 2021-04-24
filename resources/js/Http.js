import axios from 'axios';
import store from './store';
import * as actions from './store/actions';

let token = document.head.querySelector('meta[name="csrf-token"]');
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
axios.defaults.headers.common['reference-origin'] = location.origin;
axios.defaults.headers.common['reference-locale'] = localStorage.getItem('selectedlang');

export default axios;
