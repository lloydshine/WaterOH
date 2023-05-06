import styled from "styled-components";

// Define some dummy data for our products
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    image:
      "https://cdn.shopify.com/s/files/1/0590/1805/1763/products/5cf60d1304beb85e68a3cc09_1200x1200.jpg?v=1631517597",
    description: "Water",
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    image:
      "https://hansonbeverage.com/wp-content/uploads/2017/06/5-gallon-bottle.jpg",
    description: "Water",
  },
  {
    id: 3,
    name: "Product 3",
    price: 39.99,
    image:
      "https://ph-test-11.slatic.net/p/585933f985114f6e66785f61a80cb195.jpg",
    description: "Water ni",
  },
  {
    id: 4,
    name: "Product 4",
    price: 39.99,
    image:
      "https://aquaflask.com/wp-content/uploads/2021/07/22oz-CHERRY-RED-L1.png",
    description: "Dli Water",
  },
];

// Define some styles for our product cards
const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px;
`;

const ProductCard = styled.div`
  width: 200px;
  margin: 20px;
  border: 2px solid #29aae1;
  border-radius: 5px;
  padding: 20px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductTitle = styled.h2`
  font-size: 24px;
  margin-top: 10px;
`;

const ProductDescription = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;

const AddToCartButton = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

function ProductsPage() {
  const handleAddToCart = (productId) => {
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <ProductsContainer>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image} alt={product.title} />
          <ProductTitle>{product.name}</ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
          <AddToCartButton onClick={() => handleAddToCart(product.id)}>
            Add to Cart
          </AddToCartButton>
        </ProductCard>
      ))}
    </ProductsContainer>
  );
}

export default ProductsPage;
