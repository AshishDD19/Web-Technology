import React from 'react'
import "./Main.css"
import "../components_1/Section1.css"
import img from "../assets/pexels-robin-stickel-70497.jpg"
function Main() {
    return (
        <div className='main'>
            <Section1/>
            <ImageSec/>
        </div>
    )
}

function Section1() {
    return (
        <div className='section1'>
            <h1 className='heading'>LOREM IPSUM</h1>
            <p className='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamusid est vitae dolor rhoncus tristique.
                Maecenas metus quam,rhoncus euismod lorem in, sollicitudin viverra eros. Donecdictum luctus quam ut tristique.
                Curabitur nec faucibus purus.Quisque congue sem nec justo mollis, in tincidunt erat pretium.Sed pulvinar,
                massa ac porta viverra.
            </p>
            <button className="btn1">Click Me</button>
        </div>
    )
}

function ImageSec(){
       return(
        <div><img src={img} alt="img1" height="650px" width="100%"/></div>
    )
}
export default Main
