import React from 'react';
import {BackgroundColorProps, useTheme} from '@shopify/restyle';
import {StatusBar} from 'react-native';
import { Theme } from '../theme/foundation';
import { Box } from './StyledComponents';

function Page({
  children,
  backgroundColor,
  barStyle = 'dark-content',
  isTranslucentStatusBar = false,
}: {
  children: React.ReactNode;
  barStyle?: 'dark-content' | 'light-content';
  isTranslucentStatusBar?: boolean;
  backgroundColor: BackgroundColorProps<Theme>['backgroundColor'];
}): React.JSX.Element {
  const {colors} = useTheme();
  return (
    <Box flex={1} backgroundColor={backgroundColor}>
      <StatusBar
        barStyle={barStyle}
        backgroundColor={colors[backgroundColor]}
        translucent={isTranslucentStatusBar}
      />
      {children}
    </Box>
  );
}

export default Page;
