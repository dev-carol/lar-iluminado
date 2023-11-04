import React from 'react';
import {
  IconPaperBag,
  IconBallVolleyball,
  IconDogBowl,
  IconBath,
  IconVaccine,
  IconHome2,
  IconMapPin,
  IconMail,
  IconPhoneCall
} from "@tabler/icons-react";

type IconType = {
  [key: string]: React.ElementType; 
};

const iconMap: IconType = {
  IconPaperBag,
  IconBallVolleyball,
  IconDogBowl,
  IconBath,
  IconVaccine,
  IconHome2,
  IconMapPin,
  IconMail,
  IconPhoneCall
  
};

type IconProps = {
  iconName: string;
  color?: string;
  size? : number;
};

function renderTablerIcon({ iconName, color = '#C9AB81',  size = 34 }: IconProps) {
  const IconComponent = iconMap[iconName];

  if (IconComponent) {
    return <IconComponent  style={{ color: color, width: size, height: size }} />;
  } else {
    return null; 
  }
}

export default renderTablerIcon;
