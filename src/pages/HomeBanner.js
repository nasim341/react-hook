import React, { useState } from 'react';

const HomeBanner = () => {
    const[color,setColor]=useState("blue")
    if(color==="blue"){
    return (
        <div>
            <h2 style={{color}}>This is the blue color</h2>
        </div>
    );
}else if(color==="red"){
    return (
        <div>
            <h3 style={{color}}>This is the red color</h3>
        </div>
    );
}
};

export default HomeBanner;