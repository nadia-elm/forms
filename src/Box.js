
import React from 'react'


    

    const Box = ({ index, width, height, backgroundColor, removeBox }) => {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor,
    display: 'inline-block',
    margin: '10px',
  };
    const handleClick = () => {
      removeBox(index)
    }
  return (
    <>
      <div style={style}>
        <button onClick={handleClick} >X</button>
        Box
      </div>
    </>
  );
}

export default Box