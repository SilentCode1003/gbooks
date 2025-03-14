import React, { useEffect, useState } from "react";
import { Table, Pagination, TextInput } from "flowbite-react";
import apiConfig from "../config/config";

const TransactionHistory = () => {
    const [transactionHistory, setTransactionHistory] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const recordsPerPage = 5;

    useEffect(() => {
        const fetchTransactionHistory = async () => {
            try {
                const response = await fetch(`${apiConfig.baseUrl}${apiConfig.endpoints.getTransactionHistory}`);
                const result = await response.json();
                if (result.message === "SUCCESS") {
                    setTransactionHistory(result.data);
                } else {
                    console.error("Error fetching transaction history:", result);
                }
            } catch (error) {
                console.error("Error fetching transaction history:", error);
            }
        };

        fetchTransactionHistory();
    }, []);

    const filteredHistory = transactionHistory.filter(history =>
        history.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredHistory.length / recordsPerPage);
    const paginatedHistory = filteredHistory.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);

    return (
        <div className="container mx-auto p-6">
            <div className="max-w-8xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Transaction History</h1>

                {/* Search Input */}
                <TextInput
                    id="search"
                    type="text"
                    placeholder="Search transaction history..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mb-4"
                    style={{ width: "30%" }}
                />

                {/* Table */}
                <div className="overflow-x-auto">
                    <Table hoverable className="w-full bg-gray" style={{ tableLayout: "auto" }}>
                        <Table.Head>
                            <Table.HeadCell>#</Table.HeadCell>
                            <Table.HeadCell>Transaction ID</Table.HeadCell>
                            <Table.HeadCell>Processed By</Table.HeadCell>
                            <Table.HeadCell>Process Date</Table.HeadCell>
                            <Table.HeadCell>Status</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {paginatedHistory.length > 0 ? (
                                paginatedHistory.map((history, index) => (
                                    <Table.Row key={history.id} className="border-b hover:bg-gray-50">
                                        <Table.Cell>{index + 1}</Table.Cell>
                                        <Table.Cell>{history.transaction_id}</Table.Cell>
                                        <Table.Cell>{history.process_by}</Table.Cell>
                                        <Table.Cell>{history.process_date}</Table.Cell>
                                        <Table.Cell>
                                            <span className={`px-3 py-1 rounded-full text-white text-xs ${
                                                history.status === "PAID"
                                                    ? "bg-green-500"
                                                    : history.status === "PARTIALLY PAID"
                                                    ? "bg-yellow-500"
                                                    : "bg-red-500"
                                            }`}>
                                                {history.status}
                                            </span>
                                        </Table.Cell>
                                    </Table.Row>
                                ))
                            ) : (
                                <Table.Row>
                                    <Table.Cell colSpan="5" className="text-center px-4 py-3 text-gray-500">
                                        No transaction history found.
                                    </Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                </div>

                {/* Pagination using Flowbite */}
                <div className="flex justify-center mt-4">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={(page) => setCurrentPage(page)}
                        showIcons
                    />
                </div>
            </div>
        </div>
    );
};

export default TransactionHistory;
