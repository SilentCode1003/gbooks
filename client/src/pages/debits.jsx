import React, { useEffect, useState } from "react";
import { Table, Pagination, TextInput } from "flowbite-react";
import apiConfig from "../config/config";

const Debits = () => {
    const [debits, setDebits] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const debitsPerPage = 5;

    useEffect(() => {
        const fetchDebits = async () => {
            try {
                const response = await fetch(`${apiConfig.baseUrl}${apiConfig.endpoints.getDebits}`);
                const result = await response.json();
                if (result.message === "SUCCESS") {
                    setDebits(result.data);
                } else {
                    console.error("Error fetching debits:", result);
                }
            } catch (error) {
                console.error("Error fetching debits:", error);
            }
        };

        fetchDebits();
    }, []);

    const filteredDebits = debits.filter(debit =>
        debit.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        debit.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredDebits.length / debitsPerPage);
    const paginatedDebits = filteredDebits.slice((currentPage - 1) * debitsPerPage, currentPage * debitsPerPage);

    return (
        <div className="container mx-auto p-6">
            <div className="max-w-8xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Debits</h1>

                {/* Search Input */}
                <TextInput
                    id="search"
                    type="text"
                    placeholder="Search debits..."
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
                        <Table.HeadCell>Type</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {paginatedDebits.length > 0 ? (
                            paginatedDebits.map((debit, index) => (
                                <Table.Row key={debit.id} className="border-b hover:bg-gray-50">
                                    <Table.Cell>{index + 1}</Table.Cell>
                                    <Table.Cell>{debit.type}</Table.Cell>
                                    <Table.Cell>
                                        <span className={`px-3 py-1 rounded-full text-white text-xs ${debit.status === "active" ? "bg-green-500" : "bg-red-500"}`}>
                                            {debit.status}
                                        </span>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        ) : (
                            <Table.Row>
                                <Table.Cell colSpan="3" className="text-center px-4 py-3 text-gray-500">
                                    No debits found.
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

export default Debits;
