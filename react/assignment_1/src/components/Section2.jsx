import React from 'react'
import "./Section2.css"
import "../components_1/Cards.css"
import img1 from "../assets/rooms.jpg"
import img2 from "../assets/dining.jpg"
import img3 from "../assets/pool.jpg"


function Section2() {
    return (
        <div className='section2'>
            <Text />
            <div className='cards'>
                <Card1/>
                <Card2/>
                <Card3/>
            </div>
        </div>
    )
}

function Text() {
    return (
        <h1 style={{ margin: "0px", padding: "50px 0px 0px 45px" }}>Lorem Ipsum</h1>
    )
}

function Card1() {
    return (
        <div className="card" style={{textAlign:"left"}}>
            <img className='image' src={img1} />
            <h4>ROOMS</h4>
            <p className='txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium quo natus eligendi itaque, non inventore molestias.</p>
            <button className="btn">Learn More</button>
        </div>
    )
}

function Card2() {
    return (
        <div className="card" style={{textAlign:"center"}}>
            <img className='image' src={img2} />
            <h4>DINING</h4>
            <p className='txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium quo natus eligendi itaque, non inventore molestias.</p>
            <button className="btn">Learn More</button>
        </div>
    )
}
function Card3() {
    return (
        <div className="card" style={{textAlign:"right"}}>
            <img className='image' src={img3} />
            <h4>POOLS</h4>
            <p className='txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium quo natus eligendi itaque, non inventore molestias.</p>
            <button className="btn">Learn More</button>
        </div>
    )
}
export default Section2
