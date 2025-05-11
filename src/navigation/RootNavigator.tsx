import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from '../screens/Dashboard';
import { RootStackParamList } from './types';
import { Withdraw } from '../screens/Withdraw';
import { WithdrawalStatus } from '../screens/WithdrawalStatus';
import { History } from '../screens/History';
import { Summary } from '../screens/Summary';
const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#5E35B1',
          },
          headerTintColor: '#F0F2F3',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Dashboard" 
          component={Dashboard}
          options={{
            title: 'Dashboard',
          }}
        />
        <Stack.Screen 
          name="Withdraw" 
          component={Withdraw}
          options={{
            title: 'Withdraw',
          }}
        />
        <Stack.Screen 
          name="WithdrawalStatus" 
          component={WithdrawalStatus}
          options={{
            title: 'Withdrawal Status',
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="History" 
          component={History}
          options={{
            title: 'History',
          }}
        />
        <Stack.Screen 
          name="Summary" 
          component={Summary}
          options={{
            title: 'Summary',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}; 