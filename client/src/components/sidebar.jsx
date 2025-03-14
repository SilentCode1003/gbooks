import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ isSidebarOpen }) {
    const location = useLocation();
    const [isMastersOpen, setIsMastersOpen] = useState(false);
    const [isPaymentsOpen, setIsPaymentsOpen] = useState(false);

    const toggleMasters = () => {
        setIsMastersOpen(!isMastersOpen);
    };
    const togglePayments = () => {
        setIsPaymentsOpen(!isPaymentsOpen);
    };

    return (
        <aside
            className={`overflow-auto bg-gray-800 text-white p-5 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-0'
                } h-full  md:relative z-50 flex flex-col`}
            aria-label="Sidebar"
        >
            <div className="">
                {isSidebarOpen && (
                    <>
                        <h2 className="text-xl font-bold mb-5 transition-opacity duration-300">
                            Admin Panel
                        </h2>
                        <hr className="border-gray-700 mb-4" />
                        <ul className="flex-1">
                            <li className="mb-2">
                                <Link to="/" className="flex items-center p-2 hover:bg-gray-100 hover:text-gray-900 text-white">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>

                                    Dashboard
                                </Link>
                            </li>
                            <li className="mb-2">
                                <button
                                    onClick={toggleMasters}
                                    className="flex items-center p-2 hover:bg-gray-100 hover:text-gray-900 text-white   w-full text-left"
                                ><svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="3" y="15" width="6" height="6" rx="2" />  <rect x="15" y="15" width="6" height="6" rx="2" />  <rect x="9" y="3" width="6" height="6" rx="2" />  <path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" />  <line x1="12" y1="9" x2="12" y2="12" /></svg>

                                    Masters
                                </button>
                                <div className={`transition-all duration-500 ease-in-out ${isMastersOpen ? 'max-h-screen opacity-100 transform scale-100' : 'max-h-0 opacity-0 transform scale-95 overflow-hidden'}`}>
                                    <ul className="p-4 bg-gray-100 mt-2">
                                        <li className="mb-2">
                                            <Link to="/pages/users" className={`flex items-center p-2 rounded hover:bg-gray-900 hover:text-gray-100 ${location.pathname === '/pages/users' ? 'bg-gray-900 text-gray-100' : 'text-gray-900'}`}>
                                                <svg class="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="9" cy="7" r="4" />  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />  <path d="M16 3.13a4 4 0 0 1 0 7.75" />  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>
                                                Users
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/pages/vendors" className={`flex items-center p-2 rounded hover:bg-gray-900 hover:text-gray-100 ${location.pathname === '/pages/vendors' ? 'bg-gray-900 text-gray-100' : 'text-gray-900'}`}>
                                                <svg class="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />  <line x1="3" y1="9" x2="7" y2="9" /></svg>
                                                Vendors
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/pages/customers" className={`flex items-center p-2 rounded hover:bg-gray-900 hover:text-gray-100 ${location.pathname === '/pages/customers' ? 'bg-gray-900 text-gray-100' : 'text-gray-900'}`}>
                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                Customers
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/pages/departments" className={`flex items-center p-2 rounded hover:bg-gray-900 hover:text-gray-100 ${location.pathname === '/pages/departments' ? 'bg-gray-900 text-gray-100' : 'text-gray-900'}`}>
                                                <svg class="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="3" y1="21" x2="21" y2="21" />  <line x1="9" y1="8" x2="10" y2="8" />  <line x1="9" y1="12" x2="10" y2="12" />  <line x1="9" y1="16" x2="10" y2="16" />  <line x1="14" y1="8" x2="15" y2="8" />  <line x1="14" y1="12" x2="15" y2="12" />  <line x1="14" y1="16" x2="15" y2="16" />  <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" /></svg>
                                                Departments
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/pages/credits" className={`flex items-center p-2 rounded hover:bg-gray-900 hover:text-gray-100 ${location.pathname === '/pages/credits' ? 'bg-gray-900 text-gray-100' : 'text-gray-900'}`}>
                                                <svg class="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="3" y="5" width="18" height="14" rx="3" />  <line x1="3" y1="10" x2="21" y2="10" />  <line x1="7" y1="15" x2="7.01" y2="15" />  <line x1="11" y1="15" x2="13" y2="15" /></svg>
                                                Credits
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/pages/debits" className={`flex items-center p-2 rounded hover:bg-gray-900 hover:text-gray-100 ${location.pathname === '/pages/debits' ? 'bg-gray-900 text-gray-100' : 'text-gray-900'}`}>
                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                                </svg>
                                                Debits
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/pages/bank_accounts" className={`flex items-center p-2 rounded hover:bg-gray-900 hover:text-gray-100 ${location.pathname === '/pages/bank_accounts' ? 'bg-gray-900 text-gray-100' : 'text-gray-900'}`}>
                                                <svg class="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="3" y1="21" x2="21" y2="21" />  <line x1="3" y1="10" x2="21" y2="10" />  <polyline points="5 6 12 3 19 6" />  <line x1="4" y1="10" x2="4" y2="21" />  <line x1="20" y1="10" x2="20" y2="21" />  <line x1="8" y1="14" x2="8" y2="17" />  <line x1="12" y1="14" x2="12" y2="17" />  <line x1="16" y1="14" x2="16" y2="17" /></svg>
                                                Bank Accounts
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/pages/bank_balances" className={`flex items-center p-2 rounded hover:bg-gray-900 hover:text-gray-100 ${location.pathname === '/pages/bank_balances' ? 'bg-gray-900 text-gray-100' : 'text-gray-900'}`}>
                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Bank Balances
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/pages/payments" className={`flex items-center p-2 rounded hover:bg-gray-900 hover:text-gray-100 ${location.pathname === '/pages/payments' ? 'bg-gray-900 text-gray-100' : 'text-gray-900'}`}>
                                                <svg class="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M10 13l2.538-.003c2.46 0 4.962-2.497 4.962-4.997 0-3-1.89-5-4.962-5H7c-.5 0-1 .5-1 1L4 18c0 .5.5 1 1 1h2.846L9 14c.089-.564.43-1 1-1zm7.467-5.837C19.204 8.153 20 10 20 12c0 2.467-2.54 4.505-5 4.505h.021-2.629l-.576 3.65a.998.998 0 01-.988.844l-2.712-.002a.5.5 0 01-.494-.578L7.846 19" /></svg>
                                                Payments
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/pages/payment_types" className={`flex items-center p-2 rounded hover:bg-gray-900 hover:text-gray-100 ${location.pathname === '/pages/payment_types' ? 'bg-gray-900 text-gray-100' : 'text-gray-900'}`}>
                                                <svg class="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="4" width="16" height="16" rx="2" />  <path d="M9 16v-8h4a2 2 0 0 1 0 4h-4" /></svg>
                                                Payment Types
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mb-2">
                                <button
                                    onClick={togglePayments}
                                    className="flex items-center p-2 hover:bg-gray-100 hover:text-gray-900 text-white   w-full text-left"
                                ><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Payments
                                </button>
                                <div className={`transition-all duration-500 ease-in-out ${isPaymentsOpen ? 'max-h-screen opacity-100 transform scale-100' : 'max-h-0 opacity-0 transform scale-95 overflow-hidden'}`}>
                                    <ul className="p-4 bg-gray-100 mt-2">
                                        <li className="mb-2">
                                            <Link to="/pages/transactions/transactions" className={`flex items-center p-2 rounded hover:bg-gray-900 hover:text-gray-100 ${location.pathname === '/pages/transactions/transactions' ? 'bg-gray-900 text-gray-100' : 'text-gray-900'}`}>
                                                <svg class="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="9" cy="7" r="4" />  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />  <path d="M16 3.13a4 4 0 0 1 0 7.75" />  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>
                                                Transaction
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/pages/transaction_history" className={`flex items-center p-2 rounded hover:bg-gray-900 hover:text-gray-100 ${location.pathname === '/pages/transaction_history' ? 'bg-gray-900 text-gray-100' : 'text-gray-900'}`}>
                                            <svg class="h-6 w-6"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="1 4 1 10 7 10" />  <polyline points="23 20 23 14 17 14" />  <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" /></svg>
                                            History
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </>
                )}
            </div>
        </aside>
    );
}

export default Sidebar;
