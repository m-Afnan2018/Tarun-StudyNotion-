import React from 'react'
import { useSelector } from 'react-redux'
import IconButton from '../Common/IconButton';
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  return (
    <div className='space-y-8'>
      <h2 className='text-3xl font-semiBold -ml-12'>My Profile</h2>

      <div className='space-y-6'>
        <div className='flex gap-4 rounded-md p-8 bg-richblack-800 justify-center items-center'>
          <div className='flex  justify-start items-center'>
            <div >
              <img className='rounded-full w-[30%] h-[30]%' src={user.image} />
            </div>
            <div >
              <h2>{user.firstName} {user.lastName}</h2>
              <p>{user.email}</p>
            </div>
          </div>
          <div className='p-6'>
            <IconButton text={"Edit"} iconName={"VscEdit"} onclick={()=>{navigate("/dashboard/settings")}}/>
          </div>
        </div>
        <div className='flex flex-col gap-4 rounded-md p-8 bg-richblack-800 justify-center items-center'>
          {/* Personal Details */}
          <div className='flex w-full justify-between items-center px-6 '>
            <h2>Personal Details</h2>
            <div className=' '>
              <IconButton text={"Edit"} iconName={"VscEdit"} onclick={()=>{navigate("/dashboard/settings")}}/>
            </div>
          </div>

          <div className='w-full space-y-8'>
            <div className=' flex justify-between items-start px-6'>

              <div>
                <p className='text-sm text-richblack-600'>First name</p>
                <p>{user.firstName}</p>
              </div>
              <div>
                <p className='text-sm text-richblack-600'>Last name</p>
                <p>{user.lastName}</p>
              </div>
            </div>


            <div className='flex justify-between items-start px-6'>

              <div>
                <p className='text-sm text-richblack-600'>Email</p>
                <p>{user.email}</p>
              </div>
              <div>
                <p className='text-sm text-richblack-600'>Phone</p>
                <p>{user?.phone}</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default MyProfile