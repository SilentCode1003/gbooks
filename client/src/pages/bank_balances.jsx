import React, { useEffect, useState } from "react";
import { Table, Pagination, TextInput } from "flowbite-react";
import apiConfig from "../config/config";

const BankBalances = () => {
    const [balances, setBalances] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const balancesPerPage = 5;

    useEffect(() => {
        const fetchBalances = async () => {
            try {
                const response = await fetch(`${apiConfig.baseUrl}${apiConfig.endpoints.getBankBalances}`);
                const result = await response.json();
                if (result.message === "SUCCESS") {
                    setBalances(result.data);
                } else {
                    console.error("Error fetching bank balances:", result);
                }
            } catch (error) {
                console.error("Error fetching bank balances:", error);
            }
        };

        fetchBalances();
    }, []);

    const filteredBalances = balances.filter(balance =>
        balance.bank_account_id.toString().includes(searchQuery) ||
        balance.transaction_date.includes(searchQuery) ||
        balance.update_date.includes(searchQuery)
    );

    const totalPages = Math.ceil(filteredBalances.length / balancesPerPage);
    const paginatedBalances = filteredBalances.slice((currentPage - 1) * balancesPerPage, currentPage * balancesPerPage);

    return (
        <div className="container mx-auto p-6">
            <div className="max-w-8xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Bank Balances</h1>

                {/* Search Input */}
                <TextInput
                    id="search"
                    type="text"
                    placeholder="Search bank balances..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mb-4"
                    style={{ width: "30%" }}
                />

                {/* Table */}
                <div className="overflow-x-auto">
                <Table hoverable className="min-w-full bg-gray" style={{ tableLayout: "auto" }}>
                    <Table.Head>
                        <Table.HeadCell>#</Table.HeadCell>
                        <Table.HeadCell>Bank Account ID</Table.HeadCell>
                        <Table.HeadCell>Transaction Date</Table.HeadCell>
                        <Table.HeadCell>Update Date</Table.HeadCell>
                        <Table.HeadCell>Previous Amount</Table.HeadCell>
                        <Table.HeadCell>Current Amount</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {paginatedBalances.length > 0 ? (
                            paginatedBalances.map((balance, index) => (
                                <Table.Row key={balance.id} className="border-b hover:bg-gray-50">
                                    <Table.Cell>{index + 1}</Table.Cell>
                                    <Table.Cell>{balance.bank_account_id}</Table.Cell>
                                    <Table.Cell>{balance.transaction_date}</Table.Cell>
                                    <Table.Cell>{balance.update_date}</Table.Cell>
                                    <Table.Cell>{balance.previous_amount}</Table.Cell>
                                    <Table.Cell>{balance.current_amount}</Table.Cell>
                                </Table.Row>
                            ))
                        ) : (
                            <Table.Row>
                                <Table.Cell colSpan="6" className="text-center px-4 py-3 text-gray-500">
                                    No bank balances found.
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

export default BankBalances;