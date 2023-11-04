import Card from "../../components/card/Card";
import Title from "../../components/title/Title";
import { theme } from "../../styles/theme";
import marie from "../../assets/marie.png";
import woody from "../../assets/woody.png";
import saimon from "../../assets/saimon.png";

import "./styles.css";

const Pets = () => {
  const cardsData = [
    {
      id: 1,
      name: "Marie",
      imageUrl: marie,
      link: "/",
    },
    { id: 2, name: "Woody", imageUrl: woody, link: "/" },
    { id: 3, name: "Saimon", imageUrl: saimon, link: "/" },
  ];

  return (
    <div className="banner-pet" style={{ background: theme.colors.greyLight2 }}>
      <div className="container-pet">
        <section>
          <Title
            fontWeight="bold"
            color={"greyLight"}
            className="title-pet"
          >
            Os nossos amigos que estão à procura de um lar iluminado
          </Title>
        </section>
        <section style={{ display: "flex" }}>
          {cardsData.map((card) => (
            <Card
              key={card.id}
              imageUrl={card.imageUrl}
              name={card.name}
              to={card.link}
            />
          ))}
        
        </section>
      </div>
    </div>
  );
};

export default Pets;
