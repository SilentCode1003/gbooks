import React, { useEffect, useState } from "react";
import { Table, Pagination, TextInput } from "flowbite-react";
import apiConfig from "../config/config";

const PaymentTypes = () => {
    const [paymentTypes, setPaymentTypes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const paymentTypesPerPage = 5;

    useEffect(() => {
        const fetchPaymentTypes = async () => {
            try {
                const response = await fetch(`${apiConfig.baseUrl}${apiConfig.endpoints.getPaymentTypes}`);
                const result = await response.json();
                if (result.message === "SUCCESS") {
                    setPaymentTypes(result.data);
                } else {
                    console.error("Error fetching payment types:", result);
                }
            } catch (error) {
                console.error("Error fetching payment types:", error);
            }
        };

        fetchPaymentTypes();
    }, []);

    const filteredPaymentTypes = paymentTypes.filter(paymentType =>
        paymentType.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paymentType.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredPaymentTypes.length / paymentTypesPerPage);
    const paginatedPaymentTypes = filteredPaymentTypes.slice((currentPage - 1) * paymentTypesPerPage, currentPage * paymentTypesPerPage);

    return (
        <div className="container mx-auto p-6">
            <div className="max-w-8xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Payment Types</h1>

                {/* Search Input */}
                <TextInput
                    id="search"
                    type="text"
                    placeholder="Search payment types..."
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
                            <Table.HeadCell>Payment ID</Table.HeadCell>
                            <Table.HeadCell>Name</Table.HeadCell>
                            <Table.HeadCell>Status</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {paginatedPaymentTypes.length > 0 ? (
                                paginatedPaymentTypes.map((paymentType, index) => (
                                    <Table.Row key={paymentType.id} className="border-b hover:bg-gray-50">
                                        <Table.Cell>{index + 1}</Table.Cell>
                                        <Table.Cell>{paymentType.payment_id}</Table.Cell>
                                        <Table.Cell>{paymentType.name}</Table.Cell>
                                        <Table.Cell>
                                            <span className={`px-3 py-1 rounded-full text-white text-xs ${paymentType.status === "active" ? "bg-green-500" : "bg-red-500"}`}>
                                                {paymentType.status}
                                            </span>
                                        </Table.Cell>
                                    </Table.Row>
                                ))
                            ) : (
                                <Table.Row>
                                    <Table.Cell colSpan="4" className="text-center px-4 py-3 text-gray-500">
                                        No payment types found.
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

export default PaymentTypes;