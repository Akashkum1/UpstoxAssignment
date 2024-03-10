import {ColorValue, Text} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {FontSizeType, FontWeightType} from '../../types/types';
import {FontSize} from '../../constants/fonts';
import {Colors} from '../../constants/colors';

// Component to render a text, by default the text has 14 size, normal weight and black color
export type TypographyProps = {
  size?: FontSizeType;
  weight?: FontWeightType;
  color?: ColorValue;
};

export type TypographyPropsWithChildren = PropsWithChildren<TypographyProps>;

const Typography = ({
  size = 'regular',
  weight = 'normal',
  color = Colors.TextColor,
  children,
}: TypographyPropsWithChildren): React.JSX.Element => {
  const fontSize = FontSize[size];
  return (
    <Text style={[{fontSize: fontSize, fontWeight: weight, color}]}>
      {children}
    </Text>
  );
};

export default Typography;
