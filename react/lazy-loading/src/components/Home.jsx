import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'


const About = React.lazy(() => import("../components/About"))
function Home() {
  return (
    <div>
   
    <Suspense fallback={<h1>Loading...</h1>}>
         <Link to="/about"> <div className='btn btn-primary'>About </div></Link>
    </Suspense>
    </div>

  )
}

export default Home
