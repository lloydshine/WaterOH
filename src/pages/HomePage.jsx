import styled from "styled-components";
import headerImage from "../images/Image.jpg";

const Header = styled.header`
  height: 80vh;
  background-image: url(${headerImage});
  background-size: cover;
  background-position: center;
`;

const Intro = styled.section`
  padding: 80px 16px;
  background-color: #f1f1f1;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 32px;
  color: #29aae1;
`;

const Description = styled.p`
  font-size: 24px;
`;

const HomePage = () => {
  return (
    <>
      <Header />
      <Intro>
        <Title>Welcome to WaterOH</Title>
        <Description>
          Welcome to our Water Ordering System! We are a dedicated team of
          professionals committed to providing you with the most efficient and
          hassle-free way of ordering water for your home or business. Our
          state-of-the-art platform is designed to provide you with an
          easy-to-use online ordering system that will cater to your unique
          needs. Whether you require weekly, monthly or one-time delivery, our
          system is designed to provide you with the best possible experience,
          from order placement to timely delivery. With our commitment to
          quality, reliability and customer satisfaction, we are confident that
          you will enjoy using our Water Ordering System. Thank you for choosing
          us as your trusted supplier of quality water!
        </Description>
      </Intro>
    </>
  );
};

export default HomePage;
