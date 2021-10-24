import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContextProvider";

function Header() {
  const { itemCount } = useContext(CartContext);

  return (
    <header>
      <Link to="/">Store</Link>
      <Link to="/cart"> Cart ({itemCount})</Link>
    </header>
  );
}

export default Header;
