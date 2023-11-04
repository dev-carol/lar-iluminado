import { Link } from 'react-router-dom';
import { CardButton, CardContainer, CardDetails, ImgBody, TextTitle } from "./styles";

interface CardProps {
    imageUrl: string;
    name: string;
    to: string;
  }


  const Card: React.FC<CardProps> = ({ imageUrl, name, to }) => {
    return (
      <CardContainer>
        <CardDetails>
          <ImgBody src={imageUrl} alt={`Imagem de ${name}`} className="img-body" />
          <TextTitle className="text-title">{name}</TextTitle>
        </CardDetails>
        <Link to={to}>
          <CardButton className="card-button">Saiba mais</CardButton>
        </Link>
      </CardContainer>
    );
  };
  
  export default Card;
  
  
  
  
  
  
  