
import React, { useState } from 'react'
import NewBoxForm from './NewBoxForm'
import Box from './Box'

function BoxList() {
    const [boxList, setBoxList] = useState([])
    const addBox = (newBox) => {
      setBoxList((boxList) => [...boxList, newBox]);
    };
    const removeBox = (index)=>{
      let newList =  [...boxList];
      newList.splice(index,1)
     setBoxList(newList)
    }
  return (
    <div>
        {boxList.map((box,index) => {
            return (
            <Box
              key={index}
              index={index}
               backgroundColor={box.backgroundColor}
                width={box.width}
                 height={box.height} 
                 removeBox = {removeBox}
            />
            );
                   

        })}
        <NewBoxForm  removeBox = {removeBox} addBox = {addBox}/>
    </div>
  )
}

export default BoxList