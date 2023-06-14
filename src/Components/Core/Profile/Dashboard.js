import React, { useState } from 'react'
import SideBar from '../Dashboard/SideBar'
import MyProfile from '../Dashboard/MyProfile'
import ConfirmationModal from '../Dashboard/ConfirmationModal';
import { Outlet } from 'react-router-dom';


const Dashboard = () => {
  const [modelData, setModelData] = useState(null);
  return (
    <div className=' w-full h-full text-white flex justify-between items-center '>
      <div className={` ${modelData?"blur-lg":""} flex gap-[8rem]`}>
        {/* SideBar Section */}
        <div>
          <SideBar  modelData={modelData} setModelData={setModelData}/>
        </div>
        {/* My Profile Section Right Side */}
        <div className='mt-8'>
        <Outlet />
        </div>
      </div>
      {modelData && <ConfirmationModal data={modelData}/>}

    </div>
  )
}

export default Dashboard