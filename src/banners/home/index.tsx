import pet from "../../assets/pet.png";
import { theme } from "../../styles/theme";
import ButtonPrimary from "../../components/button/Button";
import Title from "../../components/title/Title";
import "./styles.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <header id="home-section" className="banner-home" style={{ background: `linear-gradient(to left, rgba(50, 40, 30, 9), #1c1b19)` }}>
      <div className="container">
        <section className="box-1">
          <Title fontWeight={"bold"} color={"white"} className="title-home">
            Lar Iluminado
          </Title>

          <p className="text-impact" style={{ color: theme.colors.grey }}>
            NÃO SÓ AS PESSOAS PRECISAM DE UMA CASA
          </p>
          <p className="description-home" style={{ color: theme.colors.grey }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae eligendi ipsum quasi quos repellendus fuga, eaque totam et sunt delectus nobis, corrupti consequatur magni veritatis earum ea perspiciatis, enim a!
          </p>
          <Link to="make-friend" target="_blank" className="button-home">
            <ButtonPrimary>Faça um amigo</ButtonPrimary>
          </Link>
        </section>
        <aside className="box-2">
          <img src={pet} className="img-pet-home" alt="cachorro sentado em uma cesta" />
        </aside>
      </div>
    </header>
  );
};

export default Home;
