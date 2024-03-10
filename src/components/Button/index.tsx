import {
  Insets,
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {PropsWithChildren} from 'react';

export type ButtonProps = {
  onPress: () => void;
  hitSlop?: number | Insets | null | undefined;
  style?:
    | StyleProp<ViewStyle>
    | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
};

export type ButtonPropsWithChildren = PropsWithChildren<ButtonProps>;

const Button = ({
  children,
  onPress,
  style,
  hitSlop,
}: ButtonPropsWithChildren): React.JSX.Element => {
  return (
    <Pressable style={!!style && style} onPress={onPress} hitSlop={hitSlop}>
      {children}
    </Pressable>
  );
};

export default Button;
