import React from 'react';
import Button from '../components/Button';
import Page from '../components/Page';
import { Box, Text } from '../components/StyledComponents'; 
import { RootStackScreenProps } from '../navigation/types';
import ListItem from '../components/ListItem';
import LottieView from 'lottie-react-native';


type TransactionDetailsProps = {
    transactionId: string;
    amount: string;
    availableLimit: string;
    timeTaken: string;
};

const TransactionDetails = ({ 
    transactionId, 
    amount, 
    availableLimit, 
    timeTaken 
}: TransactionDetailsProps) => {
    return (
        <Box alignItems='center' mt="xxl" px="m" py="m" backgroundColor='cardPrimaryBackground' borderRadius="m">
            <ListItem 
                label="Transaction ID"
                value={`#${transactionId}`}
            />
            <ListItem 
                label="Amount"
                value={`$${amount}`}
            />
            <ListItem 
                label="Available limit"
                value={`$${availableLimit}`}
            />
            <ListItem 
                label="Money withdrawn in"
                value={timeTaken}
                isLast
            />
        </Box>
    );
};


export const WithdrawalStatus = ({ navigation, route }: RootStackScreenProps<'WithdrawalStatus'>) => {
    const { transactionId, amount } = route.params;

    return (
        <Page backgroundColor="mainBackground">
            <Box flex={1} padding="m">
                <Box flex={1} justifyContent='center' alignItems='center'>
                    <Box alignItems='center' justifyContent='center' mt="xxl">
                        <Box py="s">
                            <LottieView 
                                source={require('../assets/lotties/success.lottie')} 
                                autoPlay 
                                loop={false}
                                style={{ width: 200, height: 200}}
                            />
                        </Box>
                        <Text variant="header" textAlign='center'>Withdrawn Successfully</Text>
                    </Box>
                    <TransactionDetails 
                        transactionId={transactionId}
                        amount={amount}
                        availableLimit={"8000"}
                        timeTaken={"12seconds"}
                    />
                </Box>
                <Box alignItems='center' mt="xxl" pb="m">
                    <Button
                        title="Done"
                        fullWidth
                        onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Dashboard' }] })}
                    />
                </Box>
            </Box>
        </Page>
    );
};

export default WithdrawalStatus;