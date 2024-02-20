import React, { useState } from 'react'

function ShowHide() {
    const [show, setShow] = useState(true);

    const handleClick=(event)=>{
        setShow(!show);
    }

    return <div>

            {show && <h2>HIDE ME!</h2>}
            <button onClick={handleClick}>{show ? 
            "Hide  " :"Show "} Text</button>
        </div>
    
}

export default ShowHide
