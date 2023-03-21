import React,{useEffect,useState}from 'react'
import BookCard from './BookCard'
const SkillCard = (props) => {
  console.log(props.obj)
  for(const key in props.obj){
    return (
      <BookCard data={key}/>
    )
  }

}

export default SkillCard