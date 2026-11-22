import {getToken, removeToken} from './tokenHandler.js';

const token = getToken();
if (!token) {
  window.location.replace('/login.html'); 
}

const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', () => {
  removeToken();
  window.location.replace('/login.html');
});