import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID n4xKgqUltqO1JpObJ6-_4z7DrJVw1euHbwInNluxtyM'
  }
});
