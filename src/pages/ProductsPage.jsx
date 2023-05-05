import styled from "styled-components";

// Define some dummy data for our products
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    image: "https://via.placeholder.com/150",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra euismod justo, a lacinia velit pharetra nec.",
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    image: "https://via.placeholder.com/150",
    description:
      "Integer id consectetur dolor, at faucibus orci. Sed euismod justo vel ipsum molestie, et eleifend nunc pharetra.",
  },
  {
    id: 3,
    name: "Product 3",
    price: 39.99,
    image: "https://via.placeholder.com/150",
    description:
      "Aenean vitae sapien vel sapien malesuada congue eget a mi. Nullam rhoncus, orci sed fringilla tristique, nibh nibh ullamcorper enim, a auctor magna nisi vel lectus.",
  },
  {
    id: 4,
    name: "Product 4",
    price: 39.99,
    image: "https://via.placeholder.com/150",
    description:
      "Aenean vitae sapien vel sapien malesuada congue eget a mi. Nullam rhoncus, orci sed fringilla tristique, nibh nibh ullamcorper enim, a auctor magna nisi vel lectus.",
  },
];

// Define some styles for our product cards
const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductCard = styled.div`
  width: 300px;
  margin: 20px;
  border: 1px solid gray;
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
