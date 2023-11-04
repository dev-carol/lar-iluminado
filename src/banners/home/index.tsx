import pet from '../../assets/pet.png'
import { theme } from "../../styles/theme";
import ButtonPrimary from "../../components/button/Button";
import Title from "../../components/title/Title";
import "./styles.css";


const Home = () => {
  return (
    <div className="banner-home" style={{ background: theme.colors.black }}>
      <div className="container">
        <div className="box-1">
          <Title fontWeight="bold" color={"white"} className='title-home'>
            Lar Iluminado 
          </Title>
          <p className='text-impact' style={{ color: theme.colors.grey }}>
          NÃO SÓ AS PESSOAS PRECISAM DE UMA CASA
          </p>
          <p className="description-home"style={{ color: theme.colors.grey }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae eligendi ipsum quasi quos repellendus fuga, eaque totam et sunt delectus nobis, corrupti consequatur magni veritatis earum ea perspiciatis, enim a!
          </p>
         <ButtonPrimary>Faça um amigo</ButtonPrimary>
        </div>
        <div className="box-2">
          <img src={pet} />
        </div>
      </div>
    </div>
  );
};

export default Home;
