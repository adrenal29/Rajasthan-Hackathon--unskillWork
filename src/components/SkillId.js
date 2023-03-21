import React, { useState } from 'react'
import { getDatabase, ref, set } from "firebase/database";
import { auth } from '../Firebase';
import '../css/dashboard.css'
const SkillId = () => {
    const [name, setName] = useState("");
    const db = getDatabase();
    const createId = () => {
        set(ref(db, 'users/' + auth.currentUser.uid), {
          name:name,
          skillid:name
        });
        window.location.reload();
    }
    return (
        <div className='handle'>
            <h3>Create your SkillHAndle Now to get started</h3>
            <input placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}></input>
            <br></br>
            <button style={{height:"1.5rem"}} onClick={createId}>Start Now</button>
        </div>
    )
}

export default SkillId