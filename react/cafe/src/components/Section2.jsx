import React from 'react'
import img1 from "../assets/pexels-rachel-claire-6752433.jpg"
import img2 from "../assets/pexels-eva-bronzini-6141651.jpg"
import img3 from "../assets/pexels-mister-mister-3434523.jpg"
import "../components_1/ImagesSec.css"
import "../components_1/Contents.css"
function Section2() {
    return (
        <div style={{ display: "flex", height: "670px", alignItems: "center" ,justifyContent:"flex-start"}}>
            <ImagesSec />
            <Contents/>
        </div>
    )
}


function ImagesSec() {
    return (
        <div className="images">
            <div className="img-contents">
                <img src={img1} alt="img2" height="235px" width="270px" />
                <img src={img2} alt="img3" height="235px" width="270px" />
            </div>

            <img className='img' src={img3} alt="img4" height="480px" width="270px" />

        </div>
    )
}

function Contents() {
    return (
        <div class="contents">
            <p>LOREM IPSUM</p>
            <h1>LOREM IPSUM SET ADEMIR</h1>
            <a href="#">Click <i class="fa-solid fa-arrow-right"></i></a>
        </div>
    )
}
export default Section2
