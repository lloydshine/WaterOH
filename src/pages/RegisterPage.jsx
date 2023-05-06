import styled from "styled-components";

const RegisterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const RegisterFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  padding: 20px;
`;

const RegisterPageTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const RegisterFormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const RegisterFormButton = styled.button`
  background-color: #0077cc;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const RegisterPage = () => {
  return (
    <RegisterPageContainer>
      <RegisterPageTitle>Register</RegisterPageTitle>
      <RegisterFormContainer>
        <RegisterForm>
          <RegisterFormInput type="text" placeholder="Full name" />
          <RegisterFormInput type="email" placeholder="Email address" />
          <RegisterFormInput type="password" placeholder="Password" />
          <RegisterFormInput type="password" placeholder="Confirm password" />
          <RegisterFormButton>Register</RegisterFormButton>
        </RegisterForm>
      </RegisterFormContainer>
    </RegisterPageContainer>
  );
};

export default RegisterPage;
