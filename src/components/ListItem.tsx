import React from 'react';
import { Box, Text } from './StyledComponents';
import { Theme } from '../theme/foundation';

type ListItemProps = {
  label: string;
  value: string;
  isLast?: boolean;
};

const ListItem = ({ label, value, isLast = false }: ListItemProps) => {
  return (
    <Box 
      flexDirection='row' 
      justifyContent='space-between' 
      alignItems='center' 
      width='100%' 
      py="s"
      borderBottomWidth={isLast ? 0 : 1} 
      borderColor="borderOnPrimary"
    >
      <Text variant="caption" color='textOnPrimary'>{label}</Text>
      <Text variant="caption" color='textOnPrimary'>{value}</Text>
    </Box>
  );
};

export default ListItem; 