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

