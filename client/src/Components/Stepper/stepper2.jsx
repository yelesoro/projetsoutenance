import { useEffect, useState } from "react";
import Circle from "./Circle";
import './stepper.css'

const Stepper2 = () => {

    const [circle] = useState(6);
    const [active, setActive] = useState(2);
    const [width, setWidth] = useState (0);
    useEffect(()=>{
        setWidth(100/(circle-1)*active)
    }, [circle, active])
    console.log(active)
    const arr = [];
    for (let i = 1; i<circle; i++){
        arr.push(<Circle  className = {i<=active?"circle active": "circle"} key={i}>{i}</Circle>)
    }
    return (
        <div className='container'>
            <div className="content">
                <div className="progressBar">
                    <div className="progress" style={{width : width + "%"}}>

                    </div>
                    {arr}
                </div>
            </div>
            {/* <div className="button">
                <button className="prev btn" disabled = {active>0?false:true} onClick={()=>{active<=0?setActive(0): setActive(active-1 )}} >Prev</button>
                <button className="next btn" disabled = {active>=circle-1?true:false} onClick={()=>{active>=circle?setActive(circle): setActive(active+1 )}}>Next</button>
            </div> */}
            
        </div>
    );
};

export default Stepper2;