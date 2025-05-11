import React from 'react';
import Page from '../components/Page';
import { Box, Text } from '../components/StyledComponents';
import { RootStackScreenProps } from '../navigation/types';
import { fetchTransactions } from '../services/api';
import useSWRInfinite from 'swr/infinite';
import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import dayjs from 'dayjs';

const PAGE_SIZE = 10;

export const History = ({ }: RootStackScreenProps<'History'>) => {
    const getKey = (pageIndex: number, previousPageData: any) => {
        if (previousPageData && !previousPageData.nextPage) return null;
        return [pageIndex + 1];
    };

    const { data, size, setSize, isLoading, isValidating, mutate } = useSWRInfinite(
        getKey,
        ([page]) => fetchTransactions(page, PAGE_SIZE),
        {
            revalidateFirstPage: false,
            revalidateOnFocus: false,
        }
    );

    const transactions = data ? data.flatMap(page => page.data) : [];
    const isLoadingMore = isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
    const isEmpty = data?.[0]?.data.length === 0;
    const isReachingEnd = isEmpty || (data && data[data.length - 1]?.nextPage === null);

    const onRefresh = () => {
        mutate();
    };

    const onEndReached = () => {
        if (!isReachingEnd && !isLoadingMore) {
            setSize(size + 1);
        }
    };

    const renderTransaction = ({ item }: { item: any }) => (
        <Box
            flexDirection='row'
            justifyContent='space-between'
            alignItems='center'
            width='100%'
            py="m"
            px="m"
            borderBottomWidth={1}
            borderColor="border"
        >
            <Box>
                <Text variant="body">{item.type === 'withdrawal' ? 'Withdrawal' : 'Repayment'}</Text>
                <Text variant="caption" color="textSecondary">
                    {dayjs(item.date).format('MMM DD, YYYY')}
                </Text>
            </Box>
            <Box alignItems="flex-end">
                <Text
                    variant="body"
                    color={'textPrimary'}
                >
                    ${item.amount}
                </Text>
                <Text variant="caption" color={item.status === 'success' ? 'secondary' : 'error'}>
                    {item.status}
                </Text>
            </Box>
        </Box>
    );

    const renderFooter = () => {
        if (!isLoadingMore) return null;
        return (
            <Box py="m" alignItems="center">
                <ActivityIndicator />
            </Box>
        );
    };

    return (
        <Page backgroundColor="mainBackground">
            <Box flex={1}>
                {/* Flashlist can be used here to improve performance */}
                <FlatList
                    data={transactions}
                    renderItem={renderTransaction}
                    keyExtractor={item => item.id}
                    onEndReached={onEndReached}
                    onEndReachedThreshold={0.5}
                    refreshControl={
                        <RefreshControl
                            refreshing={transactions.length > 0 && isValidating}
                            onRefresh={onRefresh}
                        />
                    }
                    ListEmptyComponent={
                        !isLoading ? (
                            <Box flex={1} justifyContent="center" alignItems="center" py="xxl">
                                <Text variant="subheader">No transactions found</Text>
                            </Box>
                        ) : null
                    }
                    ListFooterComponent={renderFooter}
                />
            </Box>
        </Page>
    );
};

export default History; 