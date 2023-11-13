import { theme } from "../../styles/theme";
import {
  Container,
  Content,
  Form,
  FormContainer,
  FormGroup,
  FormTitle,
  Image,
  ImageContainer,
  Input,
  Label,
  RadioContainer,
  RadioInput,
  RadioOption,
  TextArea,
} from "./styles";
import formPet from "../../assets/formPet.png";
import ButtonPrimary from "../../components/button/Button";

const DonatePet = () => {
  return (
    <div
      className="banner-donate-pet"
      style={{ background: theme.colors.greyLight2 }}
    >
      <Container>
        <Content>
          <ImageContainer>
            <Image src={formPet} alt="Pet" />
          </ImageContainer>
          <FormContainer>
            <Form>
              <FormTitle>Informações do Doador</FormTitle>
              <FormGroup>
                <Label>Nome</Label>
                <Input type="text" required />
              </FormGroup>
              <FormGroup>
                <Label>Whatsapp</Label>
                <Input type="text" required />
              </FormGroup>
              <FormGroup>
                <Label>Estado</Label>
                <Input type="text" required />
              </FormGroup>
              <FormGroup>
                <Label>Cidade</Label>
                <Input type="text" required />
              </FormGroup>

              <FormTitle>Informações do Pet</FormTitle>
              <FormGroup>
                <Label>Tipo de Animal</Label>
                <Input type="text" required />
              </FormGroup>
              <FormGroup>
                <Label>Sexo</Label>
                <RadioContainer>
                <RadioOption>
                  <RadioInput type="radio" name="gender" value="female" />
                  Fêmea
                </RadioOption>
                <RadioOption>
                  <RadioInput type="radio" name="gender" value="male" />
                  Macho
                </RadioOption>
              </RadioContainer>
              </FormGroup>
              <FormGroup>
                <Label>Foto do Pet</Label>
                <Input type="file" accept="image/*" />
              </FormGroup>
             
              <FormGroup>
                <Label>Motivo da Doação</Label>
                <TextArea rows={4} required />
              </FormGroup>

              <ButtonPrimary>Enviar</ButtonPrimary>
            </Form>
          </FormContainer>
        </Content>
      </Container>
    </div>
  );
};

export default DonatePet;
