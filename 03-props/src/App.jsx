import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className='parent'>
      <Card user='Aman' age={21} img="https://plus.unsplash.com/premium_photo-1765796096836-bd2f76886191?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
      <Card user='Ravi' age={22} img="https://media.istockphoto.com/id/2232090297/photo/an-in-depth-exam-of-a-sparkling-emerald-diamond-held-with-tweezers-and-other-diamond.jpg?s=612x612&w=is&k=20&c=ybPW2anltbGWou7u_ypT_-5SwZbQexi8PPGrlZ04d9k="/>
    </div>
  )
}

export default App
