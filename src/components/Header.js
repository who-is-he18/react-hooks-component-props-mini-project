import React from "react"



function Header (blogHeader) {
    const {name} = blogHeader
      return (
        <header>
            <h1>{name}</h1>
        </header>
    )

}
export default Header