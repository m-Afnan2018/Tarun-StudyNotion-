import React, { useEffect } from 'react'
import { useState } from 'react'

const RequirementSection = ({ label, name ,getValue,setValue,register }) => {

    const [requirement, setRequirement] = useState("");

    const [requirementList, setRequirementList] = useState([]);

    useEffect(()=>{
        register(name,{required:true});  
    },[]);

    

    const handleAddRequirement = () => {
        setRequirement("");
        setRequirementList([...requirementList, requirement]);  
        
    }

    const handleRemoveRequirement = (index) => {
        const updatedList = [...requirementList];

        updatedList.splice(index, 1);
        setRequirementList(updatedList);
        

    }

    return (
        <div>
            <label htmlFor={label}>
                Requirements/Instructions<sup>*</sup><br />  

                <input id={name} placeholder='Add requirements' className='text-richblack-700' onChange={(event) => { setRequirement(event.target.value) }} />

                <button onClick={()=>{handleAddRequirement()}}>Add</button>

            </label>

            <div>
                {requirementList.map((list, index) => (
                    <div className='flex' key={index}>
                        <p>{list}</p>
                        <button onClick={() => { handleRemoveRequirement(index) }}>clear</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RequirementSection