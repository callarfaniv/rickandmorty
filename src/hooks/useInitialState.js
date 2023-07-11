const { useState } = require("react");


const initialState = null

const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const login = (user) => {
        setState(user)
    }

    const logout = () => {
        setState(null)
    }

    return {
        state,
        login,
        logout,
    }
}

export default useInitialState;
