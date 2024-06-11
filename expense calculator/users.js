//users.js
const users = {

};

function isValid (username) {
  let isValid = true;
  isValid = isValid && !!username; // Check if username is not empty or falsy
  isValid = isValid && username.trim() !== ''; // Check if username is not an empty string after trimming
  isValid = isValid && username.match(/^[A-Za-z0-9_]+$/);
  return isValid;
}

function getUserData (username) {
  return users[username];
}

function addUserData (username, userData) {
  users[username] = userData;
}


module.exports = {
  isValid,
  getUserData,
  addUserData,
};