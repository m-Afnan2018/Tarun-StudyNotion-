import React from 'react'
import { sidebarLinks } from '../../../data/dashboard-links'
import SideBarLink from './SideBarLink'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../Services/operations/authapi'




const SideBar = ({ modelData, setModelData }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, loading: profileLoading } = useSelector((state) => state.profile);



    return (
        <div className={`flex relative  w-full flex-col lg:h-[700px] items-center justify-start bg-richblack-800 text-richblack-700`}>
            <div className={`${modelData ? "blur-lg" : ""} mt-8`}>
                {sidebarLinks.map((sideBarLink) => (
                    sideBarLink.type && user.accountType === sideBarLink.type || !sideBarLink.type ? (
                        <div key={sideBarLink.id} >
                            <SideBarLink link={sideBarLink} Icon={sideBarLink.icon} />
                        </div>

                    ) : (null)
                ))}

                <hr className='w-[80%] text-richblack-600' />

                {/* Setting and logout links */}

                <Link to={"/settings"}>
                    <SideBarLink link={{ name: "Settings", path: "dashboard/settings" }} Icon={"VscSettingsGear"} />
                </Link>

                <button className='w-full' onClick={() => {
                    setModelData({
                        text: "Are you sure ?",
                        subtext: "You will  be logged out from the portal...",
                        btn1title: "Logout",
                        btn2title: "Cancel",
                        btn1onclick: () => dispatch(logout(navigate)),
                        btn2onclick: () => setModelData(null)
                    })
                }}>
                    <SideBarLink link={{ name: "Logout" }} Icon={"VscSignOut"} path={""} />
                </button>
            </div>
        </div>
    )
}

export default SideBar