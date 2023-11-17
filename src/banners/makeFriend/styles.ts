import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 50px;
`;

export const Content = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  border: 2px solid #ad8e00;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 320px) {
    width: 100%; 
  }

`;

export const FormContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Form = styled.form`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`;

export const FormTitle = styled.h2`
  color: #ad8e00;
  margin-bottom: 20px;
  font-family: ${theme.fonts.crimsonText};
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #1c1b19;
  font-family: ${theme.fonts.crimsonText};
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RadioOption = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const RadioInput = styled.input`
  margin-right: 5px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;
