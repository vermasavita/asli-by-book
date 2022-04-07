const wishlistReducer = (state, action) => {
    switch(action.type){
        case "Add_TO_WISHLIST":
            return {...state, wishlist: [...state.wishlist, action.payload]}
        default:
            return state
    }
}

export { wishlistReducer };
