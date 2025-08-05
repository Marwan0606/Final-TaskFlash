export let tasks = [
{
  title: 'Need a plumber who can fix this leaky pipe',
  description: 'My kitchen sink has a leaky pipe that has been getting worse. This is the third time this pipe has leaked in the past 3 months',
  price: 'Price for the service: $20'
},

{
  title: 'Need a website for my new clothing brand',
  description: 'I have recently started a new clothing brand and need someone to design and create a website were I can sell my products and take in online payments. I need this to be done by next week',
  price: 'Price for the service: $200'
}]

export function addTask() {
  tasks.push({
    title: 'Test Title',
    description: 'Test Description',
    price: 0.00
  })
}
