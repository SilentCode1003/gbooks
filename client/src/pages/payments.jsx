import React, { useEffect, useState } from "react";
import { Table, Pagination, TextInput } from "flowbite-react";
import apiConfig from "../config/config";

const Payments = () => {
    const [payments, setPayments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const paymentsPerPage = 5;

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await fetch(`${apiConfig.baseUrl}${apiConfig.endpoints.getPayments}`);
                const result = await response.json();
                if (result.message === "SUCCESS") {
                    setPayments(result.data);
                } else {
                    console.error("Error fetching payments:", result);
                }
            } catch (error) {
                console.error("Error fetching payments:", error);
            }
        };

        fetchPayments();
    }, []);

    const filteredPayments = payments.filter(payment =>
        payment.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        payment.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        payment.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredPayments.length / paymentsPerPage);
    const paginatedPayments = filteredPayments.slice((currentPage - 1) * paymentsPerPage, currentPage * paymentsPerPage);

    return (
        <div className="container mx-auto p-6">
            <div className="max-w-8xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Payments</h1>

                {/* Search Input */}
                <TextInput
                    id="search"
                    type="text"
                    placeholder="Search payments..."
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
                            <Table.HeadCell>Description</Table.HeadCell>
                            <Table.HeadCell>Status</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {paginatedPayments.length > 0 ? (
                                paginatedPayments.map((payment, index) => (
                                    <Table.Row key={payment.id} className="border-b hover:bg-gray-50">
                                        <Table.Cell>{index + 1}</Table.Cell>
                                        <Table.Cell>{payment.code}</Table.Cell>
                                        <Table.Cell>{payment.description}</Table.Cell>
                                        <Table.Cell>
                                            <span className={`px-3 py-1 rounded-full text-white text-xs ${payment.status === "active" ? "bg-green-500" : "bg-red-500"}`}>
                                                {payment.status}
                                            </span>
                                        </Table.Cell>
                                    </Table.Row>
                                ))
                            ) : (
                                <Table.Row>
                                    <Table.Cell colSpan="4" className="text-center px-4 py-3 text-gray-500">
                                        No payments found.
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

export default Payments;