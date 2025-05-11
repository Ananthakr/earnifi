import React from 'react';
import Page from '../components/Page';
import { Box, Text } from '../components/StyledComponents';
import { RootStackScreenProps } from '../navigation/types';
import ListItem from '../components/ListItem';

const loanDetails = {
    interestRate: "12%",
    startDate: "01/01/2024",
    totalDisbursed: "10000.00",
    totalRepaid: "2000.00",
    remainingAmount: "8000.00",
    nextPaymentDate: "01/02/2024",
    nextPaymentAmount: "1000.00"
};

export const Summary = ({ }: RootStackScreenProps<'Summary'>) => {

    return (
        <Page backgroundColor="mainBackground">
            <Box flex={1} padding="m">
                <Box alignItems='center' mt="xxl" px="m" py="m" backgroundColor='cardPrimaryBackground' borderRadius="m">
                    <ListItem 
                        label="Interest Rate"
                        value={loanDetails.interestRate}
                    />
                    <ListItem 
                        label="Loan Start Date"
                        value={loanDetails.startDate}
                    />
                    <ListItem 
                        label="Total Disbursed"
                        value={`$${loanDetails.totalDisbursed}`}
                    />
                    <ListItem 
                        label="Total Repaid"
                        value={`$${loanDetails.totalRepaid}`}
                    />
                    <ListItem 
                        label="Remaining Amount"
                        value={`$${loanDetails.remainingAmount}`}
                    />
                    <ListItem 
                        label="Next Payment Date"
                        value={loanDetails.nextPaymentDate}
                    />
                    <ListItem 
                        label="Next Payment Amount"
                        value={`$${loanDetails.nextPaymentAmount}`}
                        isLast
                    />
                </Box>
            </Box>
        </Page>
    );
};

export default Summary; 