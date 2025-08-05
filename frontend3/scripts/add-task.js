import {tasks, addTask} from "./tasks.js"


export function generateTasksHTML() {
  let HTML = ''
  tasks.forEach((task)=>{
    HTML += `
    <div class="task-box">
      <div class="container-image-info">
          <img class="task1-image" src="images/task1-image.webp">
          <div class="info-box">
            <p class="title">${task.title}</p>
            <p class="description">My kitchen sink has a leaky pipe that has been getting worse. This is the third time this pipe has leaked in the past 3 months</p>
            <p class="price">Price for the service: $20</p>
            <button class="accept-button">Accept Task</button>
          </div>
      </div>
    </div>
    `
  })

  return HTML
}

document.querySelector('.js-task-container').innerHTML = generateTasksHTML()



document.querySelector('.js-add-task').addEventListener('click', ()=>{
  addTask()
  document.querySelector('.js-task-container').innerHTML = generateTasksHTML()
})




/*
const input = document.getElementById('task-input');
const button = document.getElementById('submit-btn');

button.addEventListener('click', async () => {
  const title = input.value.trim();

  if (!title) {
    alert('Please enter a task title');
    return;
  }

  try {
    const response = await axios.post('/api/tasks', { title });

    // Optional: show the tasks in console or on the page
    console.log('Updated tasks:', response.data.data);
  } catch (error) {
    console.error('Error adding task:', error.response.data);
  }

  input.value = ''; // clear input field

  document.querySelector('.js-task-container').innerHTML = generateTasksHTML()
});
*/





/*
const result = document.querySelector('.result')

const fetchPeople = async () => {
  try {
    const { data } = await axios.get('/api/people')

    const people = data.data.map((person) => {
      return `<h5>${person.name}</h5>`
    })
    result.innerHTML = people.join('')
  } catch (error) {
    result.innerHTML = `<div class="alert alert-danger">Can't Fetch Data</div>`
  }
}





fetchPeople()
// submit form
const btn = document.querySelector('.submit-btn')
const input = document.querySelector('.form-input')
btn.addEventListener('click', async (e) => {
  e.preventDefault()
  const nameValue = input.value

  try {
    const { data } = await axios.post('/api/people', { name: nameValue })
    const h5 = document.createElement('h5')
    h5.textContent = data.person
    result.appendChild(h5)
  } catch (error) {
    // console.log(error.response)
    formAlert.textContent = error.response.data.msg
  }
  input.value = ''
})
*/