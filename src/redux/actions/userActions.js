const setUser = (userObj) => {
    return {
        type: "SET_USER",
        payload: userObj
    }
}

const logout = () => {
    return {
        type: "LOG_OUT"
    }
}

export default {setUser, logout}