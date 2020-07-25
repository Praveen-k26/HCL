import React from "react"
import './customButton.styles.scss'

const CustomButton = ({children, loginButton, ...otherProps})=> (
    <button
        className={`${loginButton ? 'loginButton' : ''} custom-button`}
        {...otherProps}
    >
        {children}
    </button>

);

export default CustomButton

