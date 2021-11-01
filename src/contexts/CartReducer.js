function storage(cartItems) {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
}

export function sumItems(cartItems) {
  storage(cartItems);
  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total };
}

let newCartItens = new Array();

export function CartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      newCartItens = new Array(...state.cartItems);
      newCartItens.push({
        ...action.payload,
        quantity: 1
      });
      return {
        ...state,
        cartItens: newCartItens,
        ...sumItems(newCartItens.cartItems)
      };

    // case "REMOVE_ITEM":
    //   return {
    //     ...state,
    //     ...sumItems(
    //       state.cartItems.filter((item) => item.id !== action.payload.id)
    //     ),
    //     cartItems: [
    //       ...state.cartItems.filter((item) => item.id !== action.payload.id)
    //     ]
    //   };

    case "INCREASE":
      debugger;
      newCartItens = new Array(...state.cartItems);
      newCartItens[
        newCartItens.findIndex((item) => item.id === action.payload.id)
      ].quantity++;
      return {
        ...state,
        cartItems: newCartItens,
        ...sumItems(newCartItens)
      };

    // editar o decrease da mesma forma que o increase
    case "DECREASE":
      newCartItens = new Array(...state.cartItems);
      newCartItens[
        newCartItens.findIndex((item) => item.id === action.payload.id)
      ].quantity++;
      return {
        ...state,
        cartItems: newCartItens,
        ...sumItems(newCartItens)
      };

    // case "CHECKOUT":
    //   return {
    //     cartItems: [],
    //     checkout: true,
    //     ...sumItems([])
    //   };

    // case "CLEAR":
    //   return {
    //     cartItems: [],
    //     ...sumItems([])
    //   };

    default:
      return state;
  }
}
