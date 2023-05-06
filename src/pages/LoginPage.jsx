import styled from "styled-components";
//import icon from "../images/Icon.png";

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #29aae1;
`;

const LoginBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 800px;
  padding: 40px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const LoginImage = styled.img`
  width: auto;
  height: 20rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
`;

const LoginInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const LoginButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: #0077cc;
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

//const AppIcon = styled.img`
//  position: absolute;
//  top: -3.5rem;
//  left: 11px;
//  height: 50px;
//  z-index: 1;
//`;

function LoginPage() {
  return (
    <LoginPageContainer>
      <LoginBox>
        {/* <AppIcon src={icon} alt="App Icon" /> */}
        <LoginImage
          src="https://st.focusedcollection.com/19002158/i/650/focused_222920260-stock-photo-portrait-little-girl-drinking-water.jpg"
          alt="Login Image"
        />
        <LoginForm>
          <h2>Login to WaterOH</h2>
          <LoginInput type="text" placeholder="Email Address" />
          <LoginInput type="password" placeholder="Password" />
          <LoginButton>Login</LoginButton>
        </LoginForm>
      </LoginBox>
    </LoginPageContainer>
  );
}

export default LoginPage;
