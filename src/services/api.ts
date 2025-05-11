// Mock data generator
const generateTransaction = (id: number) => ({
    id: `TRX${id.toString().padStart(8, '0')}`,
    amount: (Math.random() * 1000).toFixed(2),
    type: Math.random() > 0.5 ? 'withdrawal' : 'repayment',
    date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
    status: Math.random() > 0.2 ? 'success' : 'failed'
});

// Generate exactly 100 mock transactions
const TOTAL_TRANSACTIONS = 100;
const mockTransactions = Array.from({ length: TOTAL_TRANSACTIONS }, (_, i) => generateTransaction(i + 1));

// Mock API function
export const fetchTransactions = async (page: number = 1, limit: number = 10) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const start = (page - 1) * limit;
    const end = start + limit;
    const data = mockTransactions.slice(start, end);

    // Return null for nextPage if we've reached the end of our 100 transactions
    return {
        data,
        nextPage: end < TOTAL_TRANSACTIONS ? page + 1 : null,
        total: TOTAL_TRANSACTIONS
    };
}; 