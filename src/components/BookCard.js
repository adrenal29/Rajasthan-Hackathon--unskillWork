import React, { useState,useEffect } from 'react'
import { auth } from '../Firebase';
import { getDatabase, ref, get } from "firebase/database";
const BookCard = (props) => {
    const db = getDatabase();
    const dbRef = ref(db, "users"+'/'+props.data);
    const [info,setInfo]=useState("");
    useEffect(()=>{
        get(dbRef)
        .then((snapshot) => {
            const data = snapshot.val();
            console.log(data)
            setInfo(data);
        })
        .catch((err) => {
            console.error(err);
        });
    },[])
const sendReq=()=>{
    
}
  return (
  
    <div style={{border:"1px solid black",width:"40vw",marginLeft:"5vw"}}>
        <h3>{info.name}</h3>
        <h3>{info.skillid}<br></br>@911122334455</h3>
        <button onclick={sendReq} style={{border:"none",backgroundColor:"black",color:"white",marginLeft:"10%",marginBottom:"5%",height:"2rem"}}>Book Now</button>
    </div>

  )
}

export default BookCard