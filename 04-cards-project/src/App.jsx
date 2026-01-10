import {Bookmark} from 'lucide-react'
import Card from './components/card'
const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.jkX_YbI1YbpNvd8E4TBbRQHaEK?w=298&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?w=166&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hour",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.xNooNb8qvBDF9_y6pyPIoQHaEK?w=285&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.xOuJL56aADrqJdSM1PLKygHaEC?w=148&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$90/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.ihabIiVh1TA5oaTAcI6BEQHaE8?w=229&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/022/424/230/original/tesla-logo-editorial-free-vector.jpg",
    companyName: "Tesla",
    datePosted: "6 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.uI2jp3YvHR18LHqMlHEAYAHaEK?w=259&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    companyName: "NVIDIA",
    datePosted: "2 months ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$100/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.SnRqY7tU9RFaZUCXaUzCpAHaEK?w=229&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    companyName: "IBM",
    datePosted: "10 weeks ago",
    post: "Cloud Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$40/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.5x0bqIWJZ0Q912i6olkDLwHaEK?w=258&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    companyName: "Oracle",
    datePosted: "8 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hour",
    location: "Gurugram, India"
  }
];
  
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}> <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay}
        brandLogo={elem.brandLogo}
        loc={elem.location} datePosted={elem.datePosted}/>
        </div>
      })}
    </div>
  )
}

export default App
