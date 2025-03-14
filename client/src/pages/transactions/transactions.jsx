import React, { useEffect, useState } from "react";
import TransactionsUI from "./transactionsUI";
import { transactionService } from "./transactionsApi";

const TransactionsContainer = () => {
    const [transactions, setTransactions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [bankAccounts, setBankAccounts] = useState([]);
    const [paymentType, setPaymentType] = useState([]);
    const [paymentSubType, setPaymentSubType] = useState([]);

    const [newTransaction, setNewTransaction] = useState({
        bank_account_id: "",
        reference_id: "",
        type: "",
        sub_type: "",
        description: "",
        payment_type: "",
        payment_sub_type: "0",
        amount: "",
        transact_by: "",
        status: "NOT PAID",
    });

    const transactionsPerPage = 5;

    useEffect(() => {
        fetchTransactions();
        fetchBankAccounts();
        fetchPaymentType();
        fetchPaymentSubType();
    }, []);

    const fetchTransactions = async () => {
        try {
            const result = await transactionService.getTransactions();
            if (result.message === "SUCCESS") {
                setTransactions(result.data);
            } else {
                console.error("Error fetching transactions:", result);
            }
        } catch (error) {
            console.error("Error fetching transactions:", error);
        }
    };

    const fetchBankAccounts = async () => {
        try {
            const result = await transactionService.getBankAccounts();
            if (result.message === "SUCCESS") {
                setBankAccounts(result.data);
            } else {
                console.error("Error fetching bank accounts:", result);
            }
        } catch (error) {
            console.error("Error fetching bank accounts:", error);
        }
    };

    const fetchPaymentType = async () => {
        try {
            const result = await transactionService.getPaymentTypes();
            if (result.message === "SUCCESS") {
                setPaymentType(result.data);
            } else {
                console.error("Error fetching payment types:", result);
            }
        } catch (error) {
            console.error("Error fetching payment types:", error);
        }
    };
    const fetchPaymentSubType = async () => {
        try {
            const result = await transactionService.getPaymentSubTypes();
            if (result.message === "SUCCESS") {
                setPaymentSubType(result.data);
            } else {
                console.error("Error fetching payment types:", result);
            }
        } catch (error) {
            console.error("Error fetching payment types:", error);
        }
    };

    const handleInputChange = (e) => {
        setNewTransaction({ ...newTransaction, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
 
        try {
            const transactionWithDate = {
                ...newTransaction,
                transaction_date: new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" })
            };
            
            const result = await transactionService.createTransaction(transactionWithDate);
            if (result.message === "SUCCESS") {
                setTransactions([...transactions, result.data]);
                setIsModalOpen(false);
                resetForm();
                window.location.href = "/pages/transactions/transactions";
            } else {
                setErrorMessage("Failed to add transaction. Please try again.");
                console.error("Error adding transaction:", result);
            }
        } catch (error) {
            setErrorMessage("An error occurred. Please try again.");
            console.error("Error adding transaction:", error);
        }
    };

    const resetForm = () => {
        setNewTransaction({
            bank_account_id: "",
            reference_id: "",
            type: "",
            sub_type: "",
            description: "",
            payment_type: "",
            payment_sub_type: "0",
            amount: "",
            transact_by: "",
            status: "NOT PAID",
        });
    };

    const handleSearchChange = (query) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const filteredTransactions = transactions.filter(transaction =>
        transaction.status?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredTransactions.length / transactionsPerPage);
    const paginatedTransactions = filteredTransactions.slice(
        (currentPage - 1) * transactionsPerPage, 
        currentPage * transactionsPerPage
    );

    return (
        <TransactionsUI
            transactions={transactions}
            currentPage={currentPage}
            searchQuery={searchQuery}
            isModalOpen={isModalOpen}
            errorMessage={errorMessage}
            bankAccounts={bankAccounts}
            paymentType={paymentType}
            paymentSubType={paymentSubType}
            newTransaction={newTransaction}
            totalPages={totalPages}
            paginatedTransactions={paginatedTransactions}
            onSearchChange={handleSearchChange}
            onOpenModal={() => setIsModalOpen(true)}
            onCloseModal={() => setIsModalOpen(false)}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            onPageChange={handlePageChange}
        />
    );
};

export default TransactionsContainer;