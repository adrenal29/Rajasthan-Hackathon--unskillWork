import React, { useState } from 'react'
import '../css/citizenDash.css'
import { Auth } from 'firebase/auth'
import { auth } from '../Firebase'
import { getDatabase, ref, set } from "firebase/database";
import Packager from './Packager';
import Construction from './Construction';
import p1 from '../images/feature_1.png'
import p2 from '../images/feature_2.png'
import p3 from '../images/feature_3.png'
const CitizenMain = () => {
    const db = getDatabase();
    const [Pack,setPack]=useState(false);
    const [construc,setConst]=useState(false);
    (function SaveUser() {
        set(ref(db, 'citizens/' + auth.currentUser.uid), {
            phone: auth.currentUser.phoneNumber
        });
    })();
    const showPack=()=>{
        setPack(true);
        setConst(false);
    }
    const showConst=()=>{
        setConst(true);
        setPack(false);
    }
    return (
        <div>
            <h2>Welcome {auth.currentUser.phoneNumber}</h2>
            <h3>Browse work for Popular Categories</h3>
            <div className='skill'>

                <div onClick={showPack}>
                    <img src={p1} />
                    <p className="skill1">Packagers</p>
                </div>
                <div onClick={showConst}>
                    <img src={p2} />
                    <p className="skill2">Constructors</p>
                </div>
                <div>
                    <img src={p3} />
                    <p className="skill3">Guards</p>
                </div>
                <div>
                    <img src={p2} />
                    <p className="skill4">Factory Worker</p>
                </div>
            </div>
            <div className='booking'>
               {Pack&& <Packager/>}
               {construc&&<Construction/>}
            </div>
        </div>
    )
}

export default CitizenMain