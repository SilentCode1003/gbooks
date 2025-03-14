import { Routes, Route } from 'react-router-dom';
import Users from '../pages/users';
import Vendors from '../pages/vendors';
import Customers from '../pages/customers';
import Departments from '../pages/departments';
import Credits from '../pages/credits';
import Debits from '../pages/debits';
import BankAccounts from '../pages/bank_accounts';
import BankBalances from '../pages/bank_balances';
import Payments from '../pages/payments';
import PaymentTypes from '../pages/payment_types';
import Transactions from '../pages/transactions/transactions';
import TransactionHistory from '../pages/transaction_history';

function MainContent() {
  return (
    <main className="p-6 flex-1 overflow-auto bg-dark text-gray-800">
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/pages/users" element={<Users />} />
        <Route path="/pages/vendors" element={<Vendors />} />
        <Route path='/pages/customers' element={<Customers />} />
        <Route path='/pages/departments' element={<Departments />} />
        <Route path='/pages/credits' element={<Credits />} />
        <Route path='/pages/debits' element={<Debits />} />
        <Route path='/pages/bank_accounts' element={<BankAccounts />} />
        <Route path='/pages/bank_balances' element={<BankBalances />} />
        <Route path='/pages/payments' element={<Payments />} />
        <Route path='/pages/payment_types' element={<PaymentTypes />} />
        <Route path='/pages/transactions/transactions' element={<Transactions />} />
        <Route path='/pages/transaction_history' element={<TransactionHistory />} />
      </Routes>
    </main>
  );
}

export default MainContent;
