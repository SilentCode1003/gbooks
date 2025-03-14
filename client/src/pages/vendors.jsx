import React, { useEffect, useState } from 'react';
import { Table, Pagination, TextInput } from 'flowbite-react';
import apiConfig from '../config/config';

const Vendors = () => {
    const [vendors, setVendors] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const vendorsPerPage = 5;

    useEffect(() => {
        const fetchVendors = async () => {
            try {
                const response = await fetch(`${apiConfig.baseUrl}${apiConfig.endpoints.getVendors}`);
                const result = await response.json();
                if (result.message === 'SUCCESS') {
                    setVendors(result.data);
                } else {
                    console.error('Error fetching vendors:', result);
                }
            } catch (error) {
                console.error('Error fetching vendors:', error);
            }
        };

        fetchVendors();
    }, []);

    const filteredVendors = vendors.filter(vendor =>
        vendor.business_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vendor.business_type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vendor.contact_person.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vendor.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vendor.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vendor.mobile.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vendor.business_address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vendor.tin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vendor.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredVendors.length / vendorsPerPage);
    const paginatedVendors = filteredVendors.slice((currentPage - 1) * vendorsPerPage, currentPage * vendorsPerPage);

    return (
        <div className="container mx-auto p-6">
            <div className="max-w-8xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Vendors</h1>
                <TextInput
                    id="search"
                    type="text"
                    placeholder="Search vendors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mb-4"
                    style={{ width: "100%" }}
                />

                {/* Search Bar */}


                {/* Table */}
                <div className="overflow-x-auto">
                 <Table hoverable className="min-w-full bg-gray" style={{ tableLayout: "auto" }}>
                    <Table.Head>
                        <Table.HeadCell>#</Table.HeadCell>
                        <Table.HeadCell className="truncate max-w-xs whitespace-nowrap overflow-hidden text-ellipsis">Business Name</Table.HeadCell>
                        <Table.HeadCell className="truncate max-w-xs whitespace-nowrap overflow-hidden text-ellipsis">Business Type</Table.HeadCell>
                        <Table.HeadCell className="truncate max-w-xs whitespace-nowrap overflow-hidden text-ellipsis">Contact Person</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Phone</Table.HeadCell>
                        <Table.HeadCell>Mobile</Table.HeadCell>
                        <Table.HeadCell className="truncate max-w-xs whitespace-nowrap overflow-hidden text-ellipsis">Business Address</Table.HeadCell>
                        <Table.HeadCell>TIN</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {paginatedVendors.length > 0 ? (
                            paginatedVendors.map((vendor, index) => (
                                <Table.Row key={vendor.id} className="border-b hover:bg-gray-50">
                                    <Table.Cell>{index + 1}</Table.Cell>
                                    <Table.Cell>{vendor.business_name}</Table.Cell>
                                    <Table.Cell>{vendor.business_type}</Table.Cell>
                                    <Table.Cell>{vendor.contact_person}</Table.Cell>
                                    <Table.Cell>{vendor.email}</Table.Cell>
                                    <Table.Cell>{vendor.phone}</Table.Cell>
                                    <Table.Cell>{vendor.mobile}</Table.Cell>
                                    <Table.Cell>{vendor.business_address}</Table.Cell>
                                    <Table.Cell>{vendor.tin}</Table.Cell>
                                    <Table.Cell>
                                        <span className={`px-3 py-1 rounded-full text-white text-xs ${vendor.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}>
                                            {vendor.status}
                                        </span>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        ) : (
                            <Table.Row>
                                <Table.Cell colSpan="10" className="text-center px-4 py-3 text-gray-500">
                                    No vendors found.
                                </Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
                </div>

                {/* Pagination */}
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

export default Vendors;
