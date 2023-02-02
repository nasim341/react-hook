import React, { useRef } from 'react';

const Home = () => {
    let UserName=useRef();
    let Password=useRef();

    const submitForm = () =>{
        let a = UserName.current.value;
        let b = Password.current.value;

        alert(a)
        alert(b)
    }
    return (
        
        <div>
            <input ref = {UserName} placeholder='UserName' type="text"/>
            <input ref = {Password} placeholder='Password' type="text"/>
            <button onClick={submitForm}>Submit</button>
        </div>
    );
};

export default Home;