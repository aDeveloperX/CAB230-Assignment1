import React, { useState } from 'react'
import LoginControl from './Login/LoginControl'
import RegisterControl from './Register/RegisterControl'

const UserControls = () => {
    const [isLoggedin, setIsLoggedin] = useState(false)
    const [username, setUsername] = useState("")

    const loginHandler = () => {
        if (!isLoggedin) {
            setIsLoggedin(true)
        }
    }

    const getName = (name) => {
        setUsername(name)
    }

    const buildControl = isLoggedin ? <h4 class="text-primary">{username}</h4> : <div className="row">
        <RegisterControl></RegisterControl>
        <LoginControl login={loginHandler} getname={getName}></LoginControl>
    </div>

    return buildControl
}

export default UserControls