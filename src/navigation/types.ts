import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Dashboard: undefined;
  Withdraw: undefined;
  WithdrawalStatus: {
    transactionId: string;
    amount: string;
  };
  History: undefined;
  Summary: undefined;
  // Add more screens here as needed
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = 
  NativeStackScreenProps<RootStackParamList, T>; 