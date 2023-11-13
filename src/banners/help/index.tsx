import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/button/Button";
import Icons from "../../components/icons/Icons";
import { IconsContainer } from "../../components/icons/styles";
import Title from "../../components/title/Title";
import { theme } from "../../styles/theme";
import "./styles.css";

const iconsData = [
  {
    iconName: "IconPaperBag",
    name: "Pet Food",
  },
  {
    iconName: "IconBallVolleyball",
    name: "Brinquedos",
  },
  {
    iconName: "IconDogBowl",
    name: "Tigelas e copos",
  },
  {
    iconName: "IconBath",
    name: "Kit banho",
  },
  {
    iconName: "IconVaccine",
    name: "Medicamentos",
  },
  {
    iconName: "IconHome2",
    name: "Casinha",
  },
];

const Help = () => {
  return (
    <div
      className="banner-help"
      style={{ background: theme.colors.greyLight2 }}
    >
      <div>
        <section>
          <Title fontWeight="bold" color={"greyLight"} className="title-pet">
            Como ajudar o lar iluminado?
          </Title>
        </section>
        <section className="icons-container">
          <IconsContainer>
            {iconsData.map((data, index) => (
              <Icons key={index} iconName={data.iconName} name={data.name} />
            ))}
          </IconsContainer>
        </section>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
         <Link to="/donate-pet">
            <ButtonPrimary>Quero doar um pet</ButtonPrimary>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Help;
