import { create } from 'zustand';

export interface Transaction {
    id: string;
    amount: string;
    type: 'withdrawal' | 'repayment';
    date: string;
    status: 'success' | 'failed';
}

interface TransactionStore {
    transactions: Transaction[];
    addTransaction: (transaction: Omit<Transaction, 'id' | 'date'>) => void;
}

export const useTransactionStore = create<TransactionStore>((set) => ({
    transactions: [],
    addTransaction: (transaction) => {
        const newTransaction: Transaction = {
            ...transaction,
            id: `TRX${Date.now().toString().slice(-8)}`,
            date: new Date().toISOString(),
        };
        set((state) => ({
            transactions: [newTransaction, ...state.transactions],
        }));
    },
})); 