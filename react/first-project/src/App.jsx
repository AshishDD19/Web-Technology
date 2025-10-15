import React from 'react'
import './App.css'
import img2 from './assets/Harley.jpg'


const name = "React JS";

function App() {
  let heading = <h3>Yo!</h3>
  let sum = 100 + 100;
  let height = "300px";
  let width = "300px";
  let imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9II8cmVVlZtqQMTU-b6hwZfENxqvZ_QOZQ&s"


  let style1 = {color: "green", textAlign : "center" , backgroundColor : "yellow" ,fontSize:"40px"}


  return (
    <React.Fragment>
      <h1 className='txt'>Welcome to {name} Class</h1>

      {/* inline CSS */}
      <p style={{
        fontSize: "30px",
        fontFamily:"fantasy",
        textAlign:"center",
        backgroundColor : "goldenrod",
        color : "brown"
      }}>Hi, how are you?</p>


      {heading}
       
      <br />
      <input type="text"  value={sum}/>
      <br />
      <br />
      <button className='btn'>Click Here</button>
      <img className='img1' src={imgUrl} alt="img" height={height} width={width}/>
      <img className='img2' src="HD wallpaper_ amoled, dark, Rubik's Cube (2).jpg" height={height} width={width}/>
      <img className='img3' src={img2}  />
      <br />

      {/* giving style to a variable */}
      <h3 style={style1}>Thank You!</h3>
    </React.Fragment>
    
  )
}

export default App
