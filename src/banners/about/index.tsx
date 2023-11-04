import Title from "../../components/title/Title";
import { theme } from "../../styles/theme";
import dogAndCat from "../../assets/dogAndCat.png";
import "./styles.css";
const About = () => {
  return (
    <div className="banner-about" style={{ background: theme.colors.white }}>
      <div className="container-about">
        <section>
          <img src={dogAndCat}/>
        </section>
        <section>
          <Title fontWeight="normal" color={"greyLight"} className="title-about">
            Sobre o abrigo "Lar Iluminado"
          </Title>
          <p className="text-about">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            quo, dolore a nisi, debitis eaque aspernatur beatae hic
            reprehenderit repellendus pariatur tenetur deserunt temporibus dicta
            quas quaerat autem officia molestiae.
          </p>

          <p className="text-about">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            quo, dolore a nisi, debitis eaque aspernatur beatae hic
            reprehenderit repellendus pariatur tenetur deserunt temporibus dicta
            quas quaerat autem officia molestiae.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
