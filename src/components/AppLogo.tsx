import React from "react"
import logo from "../assets/placeholder_logo_2.png"

function AppLogo() {
  return (
    <div className="flex">
      <img
        className="w-8 h-8"
        src={logo}
        alt="Advanced Contentful Editor logo"
        width="32"
        height="29"
      />
      <span className="text-lg pl-2 pt-1 font-logotype">
        Advanced Contentful Editor
      </span>
    </div>
  )
}

export default AppLogo
