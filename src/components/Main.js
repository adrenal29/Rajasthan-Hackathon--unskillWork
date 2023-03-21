import React, { useState,useEffect} from 'react';
import { auth } from '../Firebase';
import Navbar from './Navbar'
import SkillId from './SkillId';
import '../css/dashboard.css'
import { getDatabase, ref,get } from "firebase/database";
import Sidebar from './Sidebar';
import Work from './Work';
import Active from './Active';
const Mainpage = () => {
    const db = getDatabase();
    const dbRef = ref(db, "users"+'/'+auth.currentUser.uid);
    const [id,setId]=useState(false);
    const [skilId,setSkil]=useState("")
    get(dbRef)
        .then((snapshot) => {
            const data = snapshot.val();
            if(data.skillid){
            setId(true)
            setSkil(data.skillId)
            }
        })
        .catch((err) => {
            console.error(err);
        });

    // console.log(auth.currentUser.displayName)
    return (
        <div >
           
            {
                !id && <SkillId />
            }
            <div className='dashBoard'>
                <div className='panel'><Sidebar/></div>
                <div className='features'>
            
                <Navbar number={auth.currentUser.phoneNumber} skilId={skilId}  />
                <h3 style={{marginLeft:"5rem"}}>Job Requirement of your domain</h3>
                <Active/>
                </div>
            </div>
        </div>
    );
}

export default Mainpage;