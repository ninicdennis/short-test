import React from 'react';

const TestTwo = () => {
  const jsonData = JSON.stringify([
    {
      "name": "Denny",
      "age": 20,
      "position": "Lead Backend Developer"
    },
    {
      "name": "Spencer",
      "age": 20,
      "position": "Lead Frontend Developer"
    },
    {
      "name": "Larry",
      "age": 25,
      "position": "Master of all skills in Developing"
    }
  ])
// Welcome to task number 2. This one is really simple, all we want you to do is take this following JSON data, parse it, and map it 
// to display inside of this function. Make sure not to have any console errors as well!

return (
  <div>
    <h1>TEST 2</h1>
  </div>
  )
}


export default TestTwo;
