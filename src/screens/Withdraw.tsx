import { useTheme } from '@shopify/restyle';
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Page from '../components/Page';
import { Box, Text } from '../components/StyledComponents';
import { Theme } from '../theme/foundation';
import Button from '../components/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { RootStackScreenProps } from '../navigation/types';
import { useTransactionStore } from '../store/useTransactionStore';

const validationSchema = Yup.object().shape({
    amount: Yup.string()
        .required('Amount is required')
        .matches(/^\d*\.?\d{0,2}$/, 'Amount can have up to 2 decimal places')
        .test('max', 'Amount cannot exceed available credit', (value) => {
            if (!value) return true;
            const numValue = parseFloat(value);
            return numValue <= 8000;
        }),
});

const formatAmount = (text: string): string => {
    // Remove any non-digit characters except decimal point
    let cleaned = text.replace(/[^\d.]/g, '');
    
    // Ensure only one decimal point
    const parts = cleaned.split('.');
    if (parts.length > 2) {
        cleaned = parts[0] + '.' + parts.slice(1).join('');
    }
    
    // Limit to 2 decimal places
    if (parts.length === 2 && parts[1].length > 2) {
        cleaned = parts[0] + '.' + parts[1].slice(0, 2);
    }
    
    return cleaned;
};

export const Withdraw = ({ navigation }: RootStackScreenProps<'Withdraw'>) => {
    const { colors } = useTheme<Theme>();
    const addTransaction = useTransactionStore((state) => state.addTransaction);

    const handleSubmit = (values: { amount: string }) => {
        // Add the withdrawal to the store
        addTransaction({
            amount: values.amount,
            type: 'withdrawal',
            status: 'success'
        });

        // Navigate to status screen
        navigation.replace('WithdrawalStatus', {
            transactionId: `TRX${Date.now().toString().slice(-8)}`,
            amount: values.amount
        });
    };

    return (
        <Page backgroundColor="mainBackground">
            <Formik
                initialValues={{ amount: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, values, errors, touched, setTouched, setFieldValue }) => (
                    <Box flex={1} padding="m" justifyContent='space-between' pb="l">
                        <Box alignItems='center' mt="xxl">
                            <Text variant="caption">Enter amount to withdraw</Text>
                            <Box flexDirection='row' alignItems='center' justifyContent='center'>
                                <Text variant="header" pl="xs">$</Text>
                                <TextInput
                                    placeholder=''
                                    style={[styles.input, { color: colors.textPrimary }]}
                                    cursorColor={colors.textPrimary}
                                    autoFocus={true}
                                    value={values.amount}
                                    onTouchStart={() => {
                                        if(!touched.amount) {
                                            setTouched({ amount: true });
                                        }
                                    }}
                                    onChangeText={(text) => setFieldValue('amount', formatAmount(text))}
                                    keyboardType="decimal-pad"
                                />
                            </Box>
                            <Box flexDirection='row' justifyContent="center" width={'100%'} alignItems='center' pt="xs">
                                { errors.amount ? (
                                    <Text variant="caption" textAlign='center' color='error'>{errors.amount}</Text>
                                ) : (
                                    null
                                )}
                            </Box>
                        </Box>
                        <Box pt="xl" gap="m" backgroundColor='mainBackground'>
                            <Box flexDirection='row' justifyContent="center" width={'100%'} alignItems='center' pt="xs">
                                <Text variant="caption" textAlign='center'>Available credit limit: $8000.00</Text>
                            </Box>
                            <Button
                                title="Withdraw"
                                onPress={() => handleSubmit()}
                                fullWidth
                                disabled={!values.amount || Object.keys(errors).length > 0}
                            />
                            <Button
                                title="Cancel"
                                variant="outline"
                                onPress={() => navigation.goBack()}
                                fullWidth
                            />
                        </Box>
                    </Box>
                )}
            </Formik>
        </Page>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 12,
        paddingRight: 12,
        paddingLeft: 2,
    }
});

export default Withdraw;