import React, { useState ,useEffect} from 'react'
import SkillCard from './SkillCard'
import { getDatabase, ref, get } from "firebase/database";
import { auth } from '../Firebase';
const Packager = () => {
  const db = getDatabase();
  const [data,setData]=useState({});
  const dbRef = ref(db, "packagers" + '/');
  useEffect(()=>{
    get(dbRef)
    .then((snapshot) => {
      console.log(snapshot.val())
      setData(snapshot.val())
    })
    .catch((err) => {
      console.error(err);
    });
  },[])
    return (
      <SkillCard obj={data} />
    )

}


export default Packager