import { Box, Text, StyledIcon, Pressable } from './StyledComponents';
import React from 'react';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme/foundation';

const QuickLink = ({ icon, title, onPress, variant = 'unfilled' }: { icon: string, title: string, onPress: () => void, variant?: 'filled' | 'unfilled' }) => {
    const { colors } = useTheme<Theme>();

    return (
        <Pressable onPress={onPress} style={{ flex: 1 }} backgroundColor='transparent'>
            <Box alignItems='center' justifyContent='center'>
                <Box width={60} height={60} backgroundColor={variant==="filled"?"secondary":"transparent"} borderWidth={variant==="unfilled" ? 1 : 0} borderColor={'border'} borderRadius="full" alignItems='center' justifyContent='center'>
                    {/* @ts-ignore */}
                    <StyledIcon name={icon} size={24} color={variant==="filled" ? colors.textOnPrimary : colors.secondary} />
                </Box>
                <Text pt="s" variant="caption">{title}</Text>
            </Box>
        </Pressable>
    );
};

export default QuickLink;