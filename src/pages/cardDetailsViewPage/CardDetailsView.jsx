import { useSelector } from "react-redux";
import data from "../../data/products.json";

export default function CardDetailsView() {
  const selectedCardId = useSelector(
    (state) => state.ProductsInfo.selectedCardId,
  );
  const allProducts = data.collections.flatMap((col) => col.products || []);
  const selectedCard = allProducts.find(
    (product) => product.id == selectedCardId,
  );

  console.log(selectedCard);
  return (
    <>
      <div></div>
    </>
  );
}
