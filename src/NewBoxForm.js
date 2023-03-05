
import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    width: "",
    height: "",
    backgroundColor:"",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   addBox({...formData})
   setFormData(INITIAL_STATE)
  };

  // const handleChange = (e) => {
  //   console.log(e.target.name)
  // }

  return (
  

        <form onSubmit={handleSubmit}>
      <label htmlFor="width">
        Width:
        <input
        id="width"
          type="number"
          name="width"
          value={formData.width}
          onChange={handleChange}
          
         
        />
        <br />
      </label>
      <label htmlFor="height">
        Height:
        <input
        id="height"
        name="height"
          type="number"
           value={formData.height}
          onChange={handleChange}
         
        
        />
        <br />
      </label>
      <label htmlFor="color">
        Background color:
        <input
        id="color"
        name="backgroundColor"
          type="text"
           value={formData.backgroundColor}
          onChange={handleChange}
          
        />
      </label>
      <br />
      <button type="submit">Add Box</button>

        
    </form>
  );
};

export default NewBoxForm;


