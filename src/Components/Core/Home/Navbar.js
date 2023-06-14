import React, { useState } from 'react'
import logo from '../../../assets/Logo/Logo-Full-Light.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillDownCircle } from 'react-icons/ai'
import { NavbarLinks } from '../../../data/navbar-links'
import { useEffect } from 'react'
import { apiConnector } from '../../../Services/apiConnector'
import { categories, profileEndPoints } from '../../../Services/apis'
import ProfileDropdown from '../Auth/ProfileDropDown'
import { setUser } from '../../../redux/slices/profileSlice'


const { GET_USER_DETAILS } = profileEndPoints


const Navbar = () => {

    // Fetch Courses from getCategoryApi
    const dispatch = useDispatch();
    const [tags, setTags] = useState([]);
    const coursesSubLinks = [
        {
            title: "Python",
            path: "/courses/python"
        },
        {
            title: "Web Development",
            path: "/courses/web"
        }
    ]

    const getCoursesCategory = async () => {
        const courseCategory = await apiConnector("GET", categories.GET_CATEGORY_API);
        console.log(process.env.REACT_APP_BASE_URL);
        console.log("courseCategory", courseCategory.data.response);
        setTags(courseCategory.data.response);
    }

    // const getUserDetails = async (token) => {
    //     console.log(await apiConnector("GET", GET_USER_DETAILS, { token }));
    //     return await apiConnector("GET", GET_USER_DETAILS, { token })
    // }

    useEffect(() => {
        getCoursesCategory();
        // if (token) {
        //     const userDetails = getUserDetails();
        //     console.log("User details inside navbar .....", userDetails);
        //     const userImage = userDetails.data?.user?.image
        //     ? userDetails.data.user.image
        //     : `https://api.dicebear.com/5.x/initials/svg?seed=${userDetails.data.user.firstName} ${userDetails.data.user.lastName}`
        //     dispatch(setUser({ ...userDetails.data.user, image: userImage }))
            
        // }
    }, [])

    const location = useLocation();
    const navigate = useNavigate();
    // const { user } = useSelector((state) => state.profile);
    const { token } = useSelector((state) => state.auth);
    // const { totalItems } = useSelector((state) => state.cart);

    const logout = () => {
        localStorage.removeItem("token");
        navigate('/')
    }
    return (
        <div className=' border-b-2 border-b-richblack-200 w-screen bg-richblack-900'>
            <div className=' w-11/12  max-w-maxContent  mx-auto flex justify-between text-rich text-richblack-300 items-center px-12 py-3 '>
                <div className='cursor-pointer'>
                    <Link to={'/'}>
                        <img src={logo} alt='logo' />
                    </Link>
                </div>

                <div>
                    <ul className='flex gap-4'>
                        {NavbarLinks.map((link, index) => (
                            <li key={index} className={` ${link.path === location.pathname ? "text-yellow-50" : "text-richblack-200"} group transition-all  duration-200`}>
                                {link.title === 'Catalog' ?
                                    <div className='  relative'>
                                        <div className='flex items-center gap-1'>
                                            <Link to={link.path} className=''>{link.title}</Link>
                                            <AiFillDownCircle />


                                        </div>
                                        <div className='px-8  py-6 rounded-md  lg:w-[300px] bg-richblack-5 absolute -right-[95%] translate-y-5  group-hover:opacity-100 opacity-0 transition-all duration-200 bg-richblack-5'>
                                            {
                                                <div className='flex  flex-col gap-2 text-richblack-900'>
                                                    {coursesSubLinks.map((link, index) => (

                                                        <Link key={index} to={link.path} className='hover:bg-richblack-100 rounded-md py-4 px-4' >
                                                            <p> {link.title}</p>
                                                        </Link>

                                                    ))}
                                                </div>
                                            }
                                        </div>
                                        <div className='h-6 w-6 rotate-45 bg-richblack-5 absolute rounded top-10 -right-[5%] group-hover:opacity-100 opacity-0 transition-all duration-200'>

                                        </div>

                                    </div>
                                    : <Link to={link.path} >{link.title}</Link>}
                            </li>
                        ))}
                    </ul>
                </div>

                {token !== null ? (
                    <ProfileDropdown />
                ) : (
                    <div className='flex gap-4 justify-center items-center'>
                        <Link className=' border-2 border-richblack-100 px-4 py-1 hover:scale-95 transition-all  text-lg 
                 duration-150 rounded-md text-richblack-300' to={'/login'} >Login</Link>
                        <Link className='border-2 border-richblack-100 px-4 py-1 hover:scale-95 transition-all  text-lg  duration-150
                 rounded-md text-richblack-300' to={'/signup'} >Signup</Link>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Navbar