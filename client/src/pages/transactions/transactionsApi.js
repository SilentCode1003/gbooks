import apiConfig from "../../config/config";

export const transactionService = {
    getTransactions: async () => {
        try {
            const response = await fetch(`${apiConfig.baseUrl}${apiConfig.endpoints.getTransactions}`);
            return await response.json();
        } catch (error) {
            console.error("Error in getTransactions service:", error);
            throw error;
        }
    },

    getBankAccounts: async () => {
        try {
            const response = await fetch(`${apiConfig.baseUrl}${apiConfig.endpoints.getBankAccounts}`);
            return await response.json();
        } catch (error) {
            console.error("Error in getBankAccounts service:", error);
            throw error;
        }
    },

    getPaymentTypes: async () => {
        try {
            const response = await fetch(`${apiConfig.baseUrl}${apiConfig.endpoints.getPayments}`);
            return await response.json();
        } catch (error) {
            console.error("Error in getPayments service:", error);
            throw error;
        }
    },
    
    getPaymentSubTypes: async () => {
        try {
            const response = await fetch(`${apiConfig.baseUrl}${apiConfig.endpoints.getPaymentTypes}`);
            return await response.json();
        } catch (error) {
            console.error("Error in getPaymentTypes service:", error);
            throw error;
        }
    },

    createTransaction: async (transactionData) => {
        try {
            const response = await fetch(`${apiConfig.baseUrl}${apiConfig.endpoints.createTransaction}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(transactionData),
            });
            return await response.json();
        } catch (error) {
            console.error("Error in createTransaction service:", error);
            throw error;
        }
    },

    createTransactionHistory: async (transactionHistoryData) => {
        try {
            const response = await fetch(`${apiConfig.baseUrl}${apiConfig.endpoints.createTransactionHistory}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(transactionHistoryData),
            });
            return await response.json();
        } catch (error) {
            console.error("Error in createTransactionHistory service:", error);
            throw error;
        }
    }
};