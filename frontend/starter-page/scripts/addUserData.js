//import { dashboardUserInfo } from "./generateDashboardData"

let user = ''
let userID = ''

const createUser = async ()=>{
  try {
    const name = document.querySelector('.js-signup-name').value
    const email = document.querySelector('.js-signup-email').value
    const password = document.querySelector('.js-signup-password').value

    //make an if block for if the email already exists
    
    let response = await axios.post('http://localhost:3000/api/v1/users/register', { email, password, name })
    
    user = response.data.user
    userID = response.data.user._id

    localStorage.setItem('user', JSON.stringify(user));

    if (localStorage.getItem('user')) {
      window.location.href = '/worker/dashboard-worker.html';
    } else {
      console.error('Failed to store user in localStorage!');
    }

  } catch (error) {
    console.log(error)
    if (error.response) {
      console.log('Status:', error.response.status)
      console.log('Response Data:', error.response.data)
    } else {
      console.log('Error Message:', error.message)
    }

  }
}

const loginUser = async ()=>{
  try {
    const email = document.querySelector('.js-email').value
    const password = document.querySelector('.js-password').value
    
    let response = await axios.post('http://localhost:3000/api/v1/users/login', { email, password })
    
    user = response.data.user
    userID = response.data.user._id

    localStorage.setItem('user', JSON.stringify(user));
    if (localStorage.getItem('user')) {
      window.location.href = '/worker/dashboard-worker.html';
    } else {
      console.error('Failed to store user in localStorage!');
    }

  } catch (error) {
    console.log(error)
    if (error.response) {
      console.log('Status:', error.response.status)
      console.log('Response Data:', error.response.data)
    } else {
      console.log('Error Message:', error.message)
    }
    let problem = error.response.data.msg
    document.querySelector('.js-problem').innerHTML = problem

  }
}

document.querySelector('.js-signup').addEventListener('click', ()=>{
  createUser();
});


document.querySelector('#login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  loginUser();
});
