const createTask = async ()=>{
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    const creatorId = user._id

    const creatorID = creatorId
    const creatorName = 'test'
    const title = document.querySelector('.js-title').value
    const description = document.querySelector('.js-description').value
    let price = document.querySelector('.js-price').value

    price = parseFloat(price).toFixed(2)

    console.log(creatorID, creatorName, title, description, price)

    response = await axios.post('/api/v1/tasks', {creatorID, creatorName, title, description, price})
  } catch (error) {
    console.log(error)
  }
}

document.querySelector('.js-post-button').addEventListener('click', ()=>{
  createTask()
})

generateTasks = async ()=>{
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    const creatorId = user._id
    let response = await axios.get(`/api/v1/tasks/${creatorId}`)
    tasks = response.data.task
    console.log(tasks)


    function generateUserTasksHTML() {
      let HTML = ''
      tasks.forEach((task)=>{
        HTML += `
      <div class="task-card">
        <div class="task-body">
          <div class="task-meta">
            <div class="title">${task.title}</div>
            <div class="status-badge completed">Completed</div>
          </div>
          <div class="details">
            <p>${task.description}</p>
          </div>
          <div class="info-row">
            <div class="budget">Budget $${Number(task.price.$numberDecimal).toFixed(2)}</div>
            <div class="proposals">N/A</div>
          </div>
          <div class="footer-row">
            <div class="posted">Finished 2 days ago</div>
            <div class="location">📍 Downtown, 1km</div>
          </div>
        </div>
        <div class="card-actions">
          <button class="secondary small">View Receipt</button>
          <button class="accept">Leave Review</button>
        </div>
      </div>
        `
      })
      return HTML
    }

    const tasksHTML = generateUserTasksHTML()
    
    document.querySelector('.js-tasks-posted').innerHTML = tasksHTML;

  } catch(error) {
    console.log(error)
    //window.location.href = '/starter/starter-page.html';
  }
}

generateTasks()