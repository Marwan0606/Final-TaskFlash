//import { dashboardUserInfo } from "./generateDashboardData"

let user = ''
let userID = ''

const createUser = async ()=>{
  try {
    const name = document.querySelector('.js-signup-name').value
    const email = document.querySelector('.js-signup-email').value
    const password = document.querySelector('.js-signup-password').value

    let role = document.querySelector('input[name="account"]:checked').value;
    console.log(role);

    //make an if block for if the email already exists
    
    let response = await axios.post('http://localhost:3000/api/v1/users/register', { email, password, name, role })
    
    user = response.data.user
    userID = response.data.user._id

    localStorage.setItem('user', JSON.stringify(user));

    if (localStorage.getItem('user')) {
      window.location.href = '/starter/starter-page.html';
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
    const role = user.role

    localStorage.setItem('user', JSON.stringify(user));
    if (localStorage.getItem('user')) {
      if (role === 'worker') {
        window.location.href = '/worker/dashboard-worker.html';
    } else if (role === 'poster') {
        window.location.href = '/poster/poster-dashboard.html';
    }
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

document.querySelector('#signup-form').addEventListener('submit', (e)=>{
  e.preventDefault();
  createUser();
});

document.querySelector('#login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  loginUser();
});




/*
document.querySelector('#login-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const clickedButton = e.submitter;

  if (clickedButton.classList.contains('js-login')) {
    console.log('Worker Login Clicked');
    loginUser('worker');  // Pass role to loginUser function
  } else if (clickedButton.classList.contains('js-poster')) {
    console.log('Poster Login Clicked');
    loginUser('poster');  // Pass role to loginUser function
  }
});
*/