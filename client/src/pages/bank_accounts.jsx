import React, { useEffect, useState } from "react";
import { Table, Pagination, TextInput } from "flowbite-react";
import apiConfig from "../config/config";

const BankAccounts = () => {
    const [accounts, setAccounts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const accountsPerPage = 5;

    useEffect(() => {
        const fetchAccounts = async () => {
            try {
                const response = await fetch(`${apiConfig.baseUrl}${apiConfig.endpoints.getBankAccounts}`);
                const result = await response.json();
                if (result.message === "SUCCESS") {
                    setAccounts(result.data);
                } else {
                    console.error("Error fetching accounts:", result);
                }
            } catch (error) {
                console.error("Error fetching accounts:", error);
            }
        };

        fetchAccounts();
    }, []);

    const filteredAccounts = accounts.filter(account =>
        account.account_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        account.account_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
        account.bank_type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        account.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredAccounts.length / accountsPerPage);
    const paginatedAccounts = filteredAccounts.slice((currentPage - 1) * accountsPerPage, currentPage * accountsPerPage);

    return (
        <div className="container mx-auto p-6">
            <div className="max-w-8xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Bank Accounts</h1>

                {/* Search Input */}
                <TextInput
                    id="search"
                    type="text"
                    placeholder="Search accounts..."
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
                        <Table.HeadCell>Code</Table.HeadCell>
                        <Table.HeadCell>Account Name</Table.HeadCell>
                        <Table.HeadCell>Account Number</Table.HeadCell>
                        <Table.HeadCell>Bank Type</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {paginatedAccounts.length > 0 ? (
                            paginatedAccounts.map((account, index) => (
                                <Table.Row key={account.id} className="border-b hover:bg-gray-50">
                                    <Table.Cell>{index + 1}</Table.Cell>
                                    <Table.Cell>{account.code}</Table.Cell>
                                    <Table.Cell>{account.account_name}</Table.Cell>
                                    <Table.Cell>{account.account_number}</Table.Cell>
                                    <Table.Cell>{account.bank_type}</Table.Cell>
                                    <Table.Cell>
                                        <span className={`px-3 py-1 rounded-full text-white text-xs ${account.status === "active" ? "bg-green-500" : "bg-red-500"}`}>
                                            {account.status}
                                        </span>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        ) : (
                            <Table.Row>
                                <Table.Cell colSpan="6" className="text-center px-4 py-3 text-gray-500">
                                    No accounts found.
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

export default BankAccounts;