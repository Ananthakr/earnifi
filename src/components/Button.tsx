import React from 'react';
import { Pressable, Text, Box } from './StyledComponents';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme/foundation';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  fullWidth?: boolean;
};

const Button = ({ title, onPress, variant = 'primary', disabled = false, fullWidth = false }: ButtonProps) => {
  const { colors } = useTheme<Theme>();

  const getBackgroundColor = () => {
    
    switch (variant) {
      case 'primary':
        return 'secondary';
      case 'secondary':
        return 'mainBackground';
      case 'outline':
        return 'transparent';
      default:
        return 'secondary';
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case 'primary':
        return 'textOnPrimary';
      case 'secondary':
      case 'outline':
        return 'secondary';
      default:
        return 'textOnPrimary';
    }
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      //@ts-ignore
      opacity={disabled ? 0.5 : 1}  
      backgroundColor={getBackgroundColor()}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor="secondary"
      borderRadius="m"
      paddingVertical="m"
      paddingHorizontal="l"
      width={fullWidth ? '100%' : undefined}
    >
      <Text variant="button" color={getTextColor()} textAlign='center'>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button; 