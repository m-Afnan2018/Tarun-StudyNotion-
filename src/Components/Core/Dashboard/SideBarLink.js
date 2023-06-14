import React from 'react'

import * as Icons from "react-icons/vsc"
import { NavLink, matchPath } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

const SideBarLink = ({ link, Icon }) => {
  const location = useLocation();
  const LinkIcon = Icons[Icon];

  const matchRoute = (link) => {
    return matchPath(link, location.pathname);

  }

  // className={`${matchRoute(sideBarLink.path) ? "bg-yellow-800 text-yellow-50 border-l-2 border-yellow-50 scale-110 transition all duration-200" :""}`}

  return (
    <NavLink to={link.path}>

      <div className={`${link.path && matchRoute(link.path)?"  bg-yellow-800 text-yellow-50 border-l-2 border-yellow-50":
      "bg-richblack-800 hover:text-richblack-100 transition-all duration-200 text-richblack-300"}
       flex  gap-4 justify-start items-center px-6 py-2`}>
        <LinkIcon size={22}/>
        <p>{link.name}</p>
      </div>
    </NavLink>
  )
}

export default SideBarLink