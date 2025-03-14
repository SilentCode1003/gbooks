import React, { useEffect, useState } from "react";
import { Table, Pagination, TextInput } from "flowbite-react";
import apiConfig from "../config/config";

const Customers = () => {
    const [customers, setCustomers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const customersPerPage = 5;

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await fetch(`${apiConfig.baseUrl}${apiConfig.endpoints.getCustomers}`);
                const result = await response.json();
                if (result.message === "SUCCESS") {
                    setCustomers(result.data);
                } else {
                    console.error("Error fetching customers:", result);
                }
            } catch (error) {
                console.error("Error fetching customers:", error);
            }
        };

        fetchCustomers();
    }, []);

    const filteredCustomers = customers.filter(customer =>
        customer.business_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.customer_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredCustomers.length / customersPerPage);
    const paginatedCustomers = filteredCustomers.slice((currentPage - 1) * customersPerPage, currentPage * customersPerPage);

    return (
        <div className="container mx-auto p-6">
            <div className="max-w-8xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Customers</h1>

                {/* Search Input */}
                <TextInput
                    id="search"
                    type="text"
                    placeholder="Search customers..."
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
                        <Table.HeadCell>Business Name</Table.HeadCell>
                        <Table.HeadCell>Customer Name</Table.HeadCell>
                        <Table.HeadCell className="hidden sm:table-cell">Email</Table.HeadCell>
                        <Table.HeadCell className="hidden sm:table-cell">Phone</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {paginatedCustomers.length > 0 ? (
                            paginatedCustomers.map((customer, index) => (
                                <Table.Row key={customer.id} className="border-b hover:bg-gray-50">
                                    <Table.Cell>{index + 1}</Table.Cell>
                                    <Table.Cell>{customer.business_name}</Table.Cell>
                                    <Table.Cell>{customer.customer_name}</Table.Cell>
                                    <Table.Cell className="hidden sm:table-cell">{customer.email}</Table.Cell>
                                    <Table.Cell className="hidden sm:table-cell">{customer.phone}</Table.Cell>
                                    <Table.Cell>
                                        <span className={`px-3 py-1 rounded-full text-white text-xs ${customer.status === "active" ? "bg-green-500" : "bg-red-500"}`}>
                                            {customer.status}
                                        </span>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        ) : (
                            <Table.Row>
                                <Table.Cell colSpan="6" className="text-center px-4 py-3 text-gray-500">
                                    No customers found.
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

export default Customers;