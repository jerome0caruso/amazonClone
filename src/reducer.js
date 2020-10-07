export const initialState = {
    basket: [],
    user: null
};

//Selector 
export const getBasketTotal = (basket) => basket?.reduce((sum, item) => sum + item.price, 0);
let idArray = [];
let IDS;
const createID = () => {
    if (idArray.length > 0) {
        idArray.push(1)
        return IDS = idArray.length
    } else {
        idArray.push(1)
        return IDS = 0;
    }
}

const reducer = (state, action) => {
    // eslint-disable-next-line default-case

    switch (action.type) {
        case 'ADD_TO_BASKET':

            return {
                ...state,
                basket: [...state.basket, action.item],
                createID: createID

            };

        case 'EMPTY_BASKET':
            return {
                ...state,
                baseket: []
            }
            

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex( // finding the single item that equals the id and remove it
                (basketItem => {
                    console.log(action.id, basketItem.id)
                    return basketItem.id === action.id
                })
            );
            let newBasket = [...state.basket]; //copy of basket


            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {

                console.warn(
                    `Can't remove product (id: ${action.id}) as its not in basket!`
                )
            }
            return {
                ...state,
                basket: newBasket
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
}

export default reducer;