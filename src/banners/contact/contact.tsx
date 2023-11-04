import Icons from "../../components/icons/Icons";
import { IconsContainer } from "../../components/icons/styles";
import Title from "../../components/title/Title";
import { theme } from "../../styles/theme";
import patinhas from "../../assets/patinhas.png";

import "./styles.css";
const iconsData = [
  {
    iconName: "IconMapPin",
    name: "São Paulo/ Brasil",
  },
  {
    iconName: "IconMail",
    name: "lar.iluminado@gmail.com",
  },
  {
    iconName: "IconPhoneCall",
    name: "+55 (11)0000-0000",
  },
];

const Contact = () => {
  return (
    <div className="banner-contact" style={{ background: theme.colors.white }}>
      <div className="container-contact">
        <section>
          <img src={patinhas} className="img-contact" />
        </section>
        <section className="icons-container">
          <Title fontWeight="bold" color={"greyLight"} className="title-pet">
            Ficaríamos iluminados em receber o seu contato!
          </Title>
          <IconsContainer>
            {iconsData.map((data, index) => (
              <Icons key={index} iconName={data.iconName} name={data.name} />
            ))}
          </IconsContainer>
        </section>
      </div>
    </div>
  );
};

export default Contact;
