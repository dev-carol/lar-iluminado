import { CheckboxWrapper, CheckboxLabel } from './styles';
import renderTablerIcon from './renderTablerIcon'; 
interface IconsProps {
  iconName: string; 
  name?: string;
}

const Icons: React.FC<IconsProps> = ({ iconName, name }) => {
  return (
    <CheckboxWrapper>
      {renderTablerIcon({ iconName })} 
      <CheckboxLabel>{name}</CheckboxLabel>
    </CheckboxWrapper>
  );
};

export default Icons;
