import dayjs from 'dayjs';
import React from 'react';
import Page from '../components/Page';
import { Box, ScrollView, Text } from '../components/StyledComponents';
import { RootStackScreenProps } from '../navigation/types';

type HistoryItem = {
    date: string;
    amount: number;
    type: string;
    status: string;
}

const history: HistoryItem[] = [
    {
        date: '2025-01-01',
        amount: 1000,
        type: 'Withdrawal',
        status: 'Failed'
    },
    {
        date: '2024-12-01',
        amount: 2000,
        type: 'Repayment',
        status: 'Success'
    },
    {
        date: '2024-11-01',
        amount: 1000,
        type: 'Withdrawal',
        status: 'Success'
    },
    {
        date: '2024-10-01',
        amount: 1000,
        type: 'Withdrawal',
        status: 'Success'
    }
]

const HistoryItem = ({ history }: { history: HistoryItem }) => {
    return (
        <Box flexDirection='row' justifyContent='space-between' alignItems='center' pb="m" my="s" borderBottomWidth={1} borderColor="border">
            <Box>
                <Text variant='body' pb="xs">{history.type}</Text>
                <Text variant='caption'>{dayjs(history.date).format('MM/DD/YYYY')}</Text>
            </Box>
            <Box alignItems='flex-end'>
                <Text variant='body' pb="xs">${history.amount}</Text>
                <Text variant='caption' color={history.status === 'Success' ? 'primary' : 'error'}>{history.status}</Text>
            </Box>
        </Box>
    )   
}

export const History = ({ }: RootStackScreenProps<'History'>) => {

    return (
        <Page backgroundColor="mainBackground">
            <ScrollView flex={1} padding="m">
                {history.map((item) => (
                    <HistoryItem key={item.date} history={item} />
                ))}
            </ScrollView>
        </Page>
    );
};

export default History; 