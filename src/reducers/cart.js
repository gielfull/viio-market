export const cartInitialState = JSON.parse(window.localStorage.getItem("cart")) || []

export const updateLocalStorage = (state) => {
    window.localStorage.setItem("cart", JSON.stringify(state))
}

export const cartReducer = (state, action) => {
    const { type: actionType } = action
    switch (actionType) {
        case "ADD_TO_BASKET":
            const productInCartIndex = state.findIndex((item) => item.id === action?.payload.id)

            if (productInCartIndex >= 0) {
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity += 1

                updateLocalStorage(newState)
                return newState
            }

            const newStates = [
                ...state,
                {
                    ...action.payload,
                    quantity: 1
                }
            ]

            updateLocalStorage(newStates)
            return newStates

        case "REMOVE_FROM_BASKET":
            const newState = state.filter((item) => item.id !== action?.payload.id)
            updateLocalStorage(newState)
            return newState
        case "CLEAR_BASKET":
            updateLocalStorage([])
            return []
    }
}
