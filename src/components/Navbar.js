import React,{useState} from 'react'
import { auth } from '../Firebase';
import { getDatabase, ref,get } from "firebase/database";
function Navbar() {
    const db = getDatabase();
    const dbRef = ref(db, "users"+'/'+auth.currentUser.uid);
    const [skilId,setSkil]=useState("")
    const [choose,setChoose]=useState(1);

    get(dbRef)
        .then((snapshot) => {
            const data = snapshot.val();
            setSkil(data.skillid)
        })
        .catch((err) => {
            console.error(err);
        });
    const logout = () => {
        auth.signOut();
    }
    return (
        <div>
        <div style={{display:"flex",height:"20vh",marginLeft:"5%"}}>  
            <h3 >Welcome {skilId}</h3>
            <button className="login" style={{ "marginLeft": "60vw","height":"20%","marginTop":"15px"}} onClick={logout}>Logout</button>
        </div>
        {(() => {
                switch(choose) {}
            })()}
        </div>
    )
}

export default Navbar