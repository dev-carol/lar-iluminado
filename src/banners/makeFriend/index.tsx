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
  TextArea,
} from "./styles";
import makeFriend from "../../assets/makeFriend.png";
import ButtonPrimary from "../../components/button/Button";

const MakeFriend = () => {
  return (
    <div
      className="banner-donate-pet"
      style={{ background: theme.colors.greyLight2 }}
    >
      <Container>
        <Content>
          <ImageContainer>
            <Image src={makeFriend} alt="Pet" />
          </ImageContainer>
          <FormContainer>
            <Form>
              <FormTitle>Informações do adotante</FormTitle>
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
                <FormGroup>
                <Label>O que você procura em um amigo?</Label>
                <TextArea rows={4} required />
              </FormGroup>
              </FormGroup>
              <ButtonPrimary>Enviar</ButtonPrimary>
            </Form>
          </FormContainer>
        </Content>
      </Container>
    </div>
  );
};

export default MakeFriend;
