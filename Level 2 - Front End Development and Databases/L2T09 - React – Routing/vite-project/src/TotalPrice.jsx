import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function TotalPrice() {
  const { totalPrice } = useContext(ThemeContext);

  if (totalPrice === 0) {
    return null;
  }

  return (
    <div className="total-price">
      <h2>Total price: R{totalPrice}</h2>
    </div>
  );
}