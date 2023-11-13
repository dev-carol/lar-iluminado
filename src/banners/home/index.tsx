import pet from "../../assets/pet.png";
import { theme } from "../../styles/theme";
import ButtonPrimary from "../../components/button/Button";
import Title from "../../components/title/Title";
import "./styles.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="banner-home"
      style={{
        background: `linear-gradient(to left, rgba(50, 40, 30, 9), #1c1b19)`,
      }}
    >
      <div className="container">
        <div className="box-1">
          <Title fontWeight={"bold"} color={"white"} className="title-home">
            Lar Iluminado
          </Title>

          <p className="text-impact" style={{ color: theme.colors.grey }}>
            NÃO SÓ AS PESSOAS PRECISAM DE UMA CASA
          </p>
          <p className="description-home" style={{ color: theme.colors.grey }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            eligendi ipsum quasi quos repellendus fuga, eaque totam et sunt
            delectus nobis, corrupti consequatur magni veritatis earum ea
            perspiciatis, enim a!
          </p>
          <Link to="make-friend">
          <ButtonPrimary className="button-home">Faça um amigo</ButtonPrimary>
          </Link>
         
        </div>
        <div className="box-2">
          <img src={pet} className="img-pet-home" />
        </div>
      </div>
    </div>
  );
};

export default Home;
