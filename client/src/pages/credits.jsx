import React, { useEffect, useState } from "react";
import { Table, Pagination, TextInput } from "flowbite-react";
import apiConfig from "../config/config";

const Credits = () => {
    const [credits, setCredits] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const creditsPerPage = 5;

    useEffect(() => {
        const fetchCredits = async () => {
            try {
                const response = await fetch(`${apiConfig.baseUrl}${apiConfig.endpoints.getCredits}`);
                const result = await response.json();
                if (result.message === "SUCCESS") {
                    setCredits(result.data);
                } else {
                    console.error("Error fetching credits:", result);
                }
            } catch (error) {
                console.error("Error fetching credits:", error);
            }
        };

        fetchCredits();
    }, []);

    const filteredCredits = credits.filter(credit =>
        credit.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        credit.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredCredits.length / creditsPerPage);
    const paginatedCredits = filteredCredits.slice((currentPage - 1) * creditsPerPage, currentPage * creditsPerPage);

    return (
        <div className="container mx-auto p-6">
            <div className="max-w-8xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Credits</h1>

                {/* Search Input */}
                <TextInput
                    id="search"
                    type="text"
                    placeholder="Search credits..."
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
                        <Table.HeadCell>Type</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {paginatedCredits.length > 0 ? (
                            paginatedCredits.map((credit, index) => (
                                <Table.Row key={credit.id} className="border-b hover:bg-gray-50">
                                    <Table.Cell>{index + 1}</Table.Cell>
                                    <Table.Cell>{credit.type}</Table.Cell>
                                    <Table.Cell>
                                        <span className={`px-3 py-1 rounded-full text-white text-xs ${credit.status === "active" ? "bg-green-500" : "bg-red-500"}`}>
                                            {credit.status}
                                        </span>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        ) : (
                            <Table.Row>
                                <Table.Cell colSpan="3" className="text-center px-4 py-3 text-gray-500">
                                    No credits found.
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

export default Credits;