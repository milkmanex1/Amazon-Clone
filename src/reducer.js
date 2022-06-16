export const initialState = {
  basket: [],
  user: null,
};

export default function reducer(state, action) {
  //   console.log(action);

  switch (action.type) {
    case "add to basket":
      //logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "remove from basket":
      //logic for removing item from basket

      return {
        ...state,
        //filter returns an array already, so cannot put a bracket around it. Else it wont work.
        basket: state.basket.filter((item) => item.id !== action.id),
      };

    case "increase item quantity":
      //logic for increasing qty of item

      return {
        ...state,
        basket: state.basket.map((x) =>
          x.itemCode === action.itemCode
            ? { ...x, quantity: x.quantity + 1 }
            : x
        ),
      };

    case "decrease item quantity":
      //logic for increasing qty of item

      return {
        ...state,
        basket: state.basket.map((x) =>
          x.itemCode === action.itemCode
            ? { ...x, quantity: x.quantity - 1 }
            : x
        ),
      };

    case "set user":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
}
