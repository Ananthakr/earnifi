import React from 'react';
import Page from '../components/Page';
import { Box, Text, StyledIcon } from '../components/StyledComponents';
import dayjs from 'dayjs';
import QuickLink from '../components/QuickLink';
import { useNavigation } from '@react-navigation/native';
import { RootStackScreenProps } from '../navigation/types';

const balance = 1090.01;
const nextDueDate = dayjs().add(1, 'month').format('MMM DD, YYYY');
const availableCreditLimit = 8000;  

export const Dashboard = ({ navigation }: RootStackScreenProps<'Dashboard'>) => {

  const [formattedBalance, formattedBalanceDecimal] = balance.toFixed(2).toString().split('.');

  return (
    <Page backgroundColor="mainBackground">
      <Box flex={1} padding="m">
        <Box justifyContent='space-between' alignItems='center' flexDirection='row'>
          <Text variant="subheader">Hello, Mike</Text>
          <Box width={60} height={60} backgroundColor="secondary" borderRadius="full" alignItems='center' justifyContent='center'>
            <Text variant="subheader" color='textOnPrimary'>M</Text>
          </Box>
        </Box>
        <Box alignItems='center' pt="l">
          <Text variant="caption">Loan Balance</Text>
          <Box flexDirection='row' alignItems='flex-end' justifyContent='center' >
            <Text variant="header">${formattedBalance}</Text>
            <Text variant="subheader" pb="xs" color="textSecondary">.{formattedBalanceDecimal}</Text>
          </Box>
        </Box>
        <Box flexDirection='row' justifyContent="center" width={'100%'} alignItems='center' pt="s">
          <Text variant="caption" textAlign='center'>Next due date: {nextDueDate}</Text>
        </Box>
        <Box flexDirection='row' justifyContent="center" width={'100%'} alignItems='center' pt="xs">
            <Text variant="caption" textAlign='center'>Available credit limit: ${availableCreditLimit}</Text>
        </Box>

        <Box flexDirection='row' justifyContent='space-around' alignItems='center' pt="xl">
          <QuickLink icon="wallet-outline" title="Withdraw" onPress={() => {
            navigation.navigate("Withdraw");
          }} />
          <QuickLink icon="time-outline" title="History" onPress={() => {
            navigation.navigate("History");
          }} />
          <QuickLink icon="stats-chart-outline" title="Summary" onPress={() => {
            navigation.navigate("Summary");
          }} />
        </Box>
      </Box>
    </Page>
  );
}; 