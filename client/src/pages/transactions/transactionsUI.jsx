import React from "react";
import { Table, Pagination, TextInput, Modal, Button, Label, Select } from "flowbite-react";

const TransactionsUI = ({
  transactions,
  currentPage,
  searchQuery,
  isModalOpen,
  errorMessage,
  bankAccounts,
  paymentType,
  paymentSubType,
  newTransaction,
  totalPages,
  paginatedTransactions,
  onSearchChange,
  onOpenModal,
  onCloseModal,
  onInputChange,
  onSubmit,
  onPageChange,
}) => {
  const [selectedPaymentType, setSelectedPaymentType] = React.useState("");
  React.useEffect(() => {
    if (newTransaction.payment_type) {
      setSelectedPaymentType(newTransaction.payment_type);
    }
  }, [newTransaction.payment_type]);

  const handlePaymentTypeChange = (e) => {
    const selectedId = e.target.value;
    setSelectedPaymentType(selectedId);
    onInputChange(e);
  };

  const formFields = Object.keys(newTransaction).filter(key => 
    key !== "bank_account_id" && 
    key !== "process_by" && 
    key !== "process_date" && 
    key !== "transaction_date"
  );

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-8xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Transactions</h1>

        {/* Search & Add Transaction Button */}
        <div className="flex justify-between items-center mb-4">
          <TextInput
            id="search"
            type="text"
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-100"
          />
          <Button onClick={onOpenModal} className="ml-4 bg-blue-500 text-white">
            Add Transaction
          </Button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table hoverable className="min-w-full bg-gray">
            <Table.Head>
              <Table.HeadCell>#</Table.HeadCell>
              <Table.HeadCell>Bank Account ID</Table.HeadCell>
              <Table.HeadCell>Reference ID</Table.HeadCell>
              <Table.HeadCell>Type</Table.HeadCell>
              <Table.HeadCell>Sub Type</Table.HeadCell>
              <Table.HeadCell>Description</Table.HeadCell>
              <Table.HeadCell>Payment Type</Table.HeadCell>
              <Table.HeadCell>Payment Sub Type</Table.HeadCell>
              <Table.HeadCell>Amount</Table.HeadCell>
              <Table.HeadCell>Transaction Date</Table.HeadCell>
              <Table.HeadCell>Transact By</Table.HeadCell>
              <Table.HeadCell>Process By</Table.HeadCell>
              <Table.HeadCell>Process Date</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {paginatedTransactions.length > 0 ? (
                paginatedTransactions.map((transaction, index) => (
                  <Table.Row key={transaction.id} className="border-b hover:bg-gray-50">
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell>{transaction.bank_account_id}</Table.Cell>
                    <Table.Cell>{transaction.reference_id}</Table.Cell>
                    <Table.Cell>{transaction.type}</Table.Cell>
                    <Table.Cell>{transaction.sub_type}</Table.Cell>
                    <Table.Cell>{transaction.description}</Table.Cell>
                    <Table.Cell>{transaction.payment_type}</Table.Cell>
                    <Table.Cell>{transaction.payment_sub_type}</Table.Cell>
                    <Table.Cell>{transaction.amount}</Table.Cell>
                    <Table.Cell>{transaction.transaction_date}</Table.Cell>
                    <Table.Cell>{transaction.transact_by}</Table.Cell>
                    <Table.Cell>{transaction.process_by}</Table.Cell>
                    <Table.Cell>{transaction.process_date}</Table.Cell>
                    <Table.Cell>
                      <span className={`px-3 py-1 rounded-full text-white text-xs whitespace-nowrap ${transaction.status === "PAID" ? "bg-green-500" : transaction.status === "PARTIALLY PAID" ? "bg-yellow-500" : "bg-red-500"}`}>
                        {transaction.status}
                      </span>
                    </Table.Cell>
                  </Table.Row>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell colSpan="14" className="text-center px-4 py-3 text-gray-500">
                    No transactions found.
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
            onPageChange={(page) => onPageChange(page)}
            showIcons
          />
        </div>
      </div>

      {/* Add Transaction Modal */}
      <Modal show={isModalOpen} onClose={onCloseModal}>
        <Modal.Header>Add Transaction</Modal.Header>
        <Modal.Body>
          {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="bank_account_id" value="BANK ACCOUNT ID" />
                <Select
                  id="bank_account_id"
                  name="bank_account_id"
                  value={newTransaction.bank_account_id}
                  onChange={onInputChange}
                  required
                >
                  <option value="">Select Bank Account</option>
                  {bankAccounts.map((account) => (
                    <option key={account.id} value={account.id}>
                      {account.account_name}
                    </option>
                  ))}
                </Select>
              </div>
              {formFields.map((key) => (
                <div key={key}>
                  <Label htmlFor={key} value={key.replace(/_/g, " ").toUpperCase()} />
                  {key === "type" ? (
                    <Select
                      id={key}
                      name={key}
                      value={newTransaction[key]}
                      onChange={onInputChange}
                      required
                    >
                      <option>Select Type</option>
                      <option value="debit">Debit</option>
                      <option value="credit">Credit</option>
                    </Select>
                  ) : key === "sub_type" ? (
                    <Select
                      id={key}
                      name={key}
                      value={newTransaction[key]}
                      onChange={onInputChange}
                      required
                    >
                      <option>Select Sub Type</option>
                      <option value="expenses">Expenses</option>
                      <option value="purchase">Purchase</option>
                      <option value="sales">Sales</option>
                      <option value="payroll">Payroll</option>
                      <option value="budget allocation">Budget Allocation</option>
                      <option value="loans">Loans</option>
                      <option value="investment">Investment</option>
                    </Select>
                  ) : key === "payment_type" ? (
                    <Select
                      id={key}
                      name={key}
                      value={newTransaction[key]}
                      onChange={handlePaymentTypeChange}
                      required
                    >
                      <option value="">Select Payment Type</option>
                      {paymentType.map((type) => (
                        <option key={type.id} value={type.id}>
                          {type.description}
                        </option>
                      ))}
                    </Select>
                  ) : key === "payment_sub_type" ? (
                    <Select
                      id={key}
                      name={key}
                      value={newTransaction[key]}
                      onChange={onInputChange}
                      disabled={!selectedPaymentType}
                    >
                      <option value="0">Select Payment Sub Type</option>
                      {paymentSubType
                        .filter((subtype) => {
                          return String(subtype.payment_id) === String(selectedPaymentType);
                        })
                        .map((subtype) => (
                          <option key={subtype.id} value={subtype.id}>
                            {subtype.name}
                          </option>
                        ))}
                    </Select>
                    ) : key === "status" ? (
                        <Select
                          id={key}
                          name={key}
                          value={newTransaction[key]}
                          onChange={onInputChange}
                          required
                        >
                          <option>Select Status</option>
                          <option value="NOT PAID">NOT PAID</option>
                          <option value="PARTIALLY PAID">PARTIALLY PAID</option>
                          <option value="PAID">PAID</option>
                        </Select>
                  ) : (
                    <TextInput
                      id={key}
                      name={key}
                      value={newTransaction[key]}
                      onChange={onInputChange}
                      type={key === "amount" ? "number" : "text"}
                      required
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <Button type="submit" className="bg-green-500 text-white mr-2">Submit</Button>
              <Button color="gray" onClick={onCloseModal}>Cancel</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TransactionsUI;