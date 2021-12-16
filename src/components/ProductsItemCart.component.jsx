import { SimpleGrid } from "@chakra-ui/react";
import CardProducts from "./CardProducts.component";

const ProductsItemCart = () => {
  const carrito = [
    {
      id: 1,
      productName: "Smart Watch",
      score: 3,
    },
    {
      id: 2,
      productName: "Juguete de unicornio",
      score: 3,
    },
    {
      id: 3,
      productName: "Zapillas niña",
      score: 3,
    },
    {
      id: 4,
      productName: "Bloques de construcción",
      score: 3,
    },
    {
      id: 5,
      productName: "Muñeco llorón",
      score: 3,
    },
    {
      id: 6,
      productName: "Carro control remoto",
      score: 3,
    },
  ];

  return (
    <SimpleGrid columns={[1, 2, 3, 2]} spacingY="20px" mb={10}>
      {carrito.map((cart) => {
        return (
          <CardProducts
            key={cart.id}
            name={cart.productName}
            score={cart.score}
          />
        );
      })}
    </SimpleGrid>
  );
};

export default ProductsItemCart;