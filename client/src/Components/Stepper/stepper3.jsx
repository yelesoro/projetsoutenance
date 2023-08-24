import { useEffect, useState } from "react";
import Circle from "./Circle";
import './stepper.css'

const Stepper3 = () => {

    const [circle] = useState(6);
    const [active] = useState(3);
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
        
            
        </div>
    );
};

export default Stepper3;