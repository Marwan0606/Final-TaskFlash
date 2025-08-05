let tasksResponse = []

const showTasks = async ()=>{
  try {
    let response = await axios.get('/api/v1/tasks')
    tasksResponse = response.data.tasks

    function generateTasksHTML() {
      let HTML = ''
      tasksResponse.forEach((task)=>{
        HTML += `
        <div class="task-card">
          <div class="task-body">
            <div class="task-meta">
              <div class="category">Moving</div>
              <div class="time">2 hours ago</div>
            </div>
            <div class="task-title">${task.title}</div>
            <div class="task-footer">
              <div class="user">
                <div class="user-avatar small"></div>
                <div class="user-info">
                  <div class="name">${task.creatorName}</div>
                  <div class="rating">⭐ 4.8</div>
                </div>
              </div>
              <div class="price">$${Number(task.price.$numberDecimal).toFixed(2)}</div>
            </div>
            <div class="location">📍 Downtown, 2.3km</div>
          </div>
          <button class="accept">Accept Task</button>
        </div>
        `
      })
      return HTML
    }
    
    const tasksHTML = generateTasksHTML()
    
    document.querySelector('.js-task-grid').innerHTML = tasksHTML;

  } catch (error) {
    console.log(error)
    window.location.href = '/starter/starter-page.html';
  }
}

showTasks()


function dashboardUserInfo() {
  try{
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)

    document.querySelector('.js-name').innerHTML = user.name
    document.querySelector('.js-rating').innerHTML = `⭐${Number(user.rating.$numberDecimal).toFixed(2)}, # of rating`
    document.querySelector('.js-rating2').innerHTML = `★${Number(user.rating.$numberDecimal).toFixed(2)}`
    document.querySelector('.js-welcome').innerHTML = `Welcome back, ${user.name}!`
  } catch(error) {
    window.location.href = '/starter/starter-page.html';
  }

}
dashboardUserInfo()
