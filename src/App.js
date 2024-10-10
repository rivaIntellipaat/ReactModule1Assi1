import React, { useState } from 'react';
import './App.css';

const employees = [
    { id: 1, name: 'Alice Johnson', department: 'Tech', position: 'Software Engineer' },
    { id: 2, name: 'Bob Smith', department: 'HR', position: 'HR Manager' },
    { id: 3, name: 'Charlie Brown', department: 'Tech', position: 'DevOps Engineer' },
    { id: 4, name: 'Diana Prince', department: 'Finance', position: 'Accountant' },
    { id: 5, name: 'Ethan Hunt', department: 'Tech', position: 'Frontend Developer' }
];

function App() {
    const [filter, setFilter] = useState('All');
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const filteredEmployees = filter === 'All'
        ? employees
        : employees.filter(emp => emp.department === filter);

    const handleFilterChange = (dept) => {
        setFilter(dept);
        setDropdownOpen(false); // Close the dropdown after selection
    };

    return (
        <div className="w-screen h-screen justify-center flex items-center">
            <div>
                <div className='flex justify-between'>
                    <div className="text-[#8D8989] font-semibold text-xl ">
                        Welcome Employee Data
                    </div>

                    <div className="mb-4 relative left-[178px] shadow-black ">
                        <button className="p-2 border w-48 bg-[#EEEEEE] rounded-xl flex justify-evenly" onClick={() => setDropdownOpen(!isDropdownOpen)} >
                            {filter === 'All' ? 'All' : filter}
                            <svg width="12" height="20" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10 14L0 0h20L10 14z" fill="black" />
                            </svg>
                        </button>
                        
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                                <div className="p-2 cursor-pointer" onClick={() => handleFilterChange('All')}>All</div>
                                <div className="p-2 cursor-pointer" onClick={() => handleFilterChange('Tech')}>
                                    <span className="flex items-center">
                                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 0C14.17 0 14.77 0.33 15.13 0.84L19.5 7L15.13 13.16C14.77 13.67 14.17 14 13.5 14L2.5 13.99C1.4 13.99 0.5 13.1 0.5 12V2C0.5 0.9 1.4 0.01 2.5 0.01L13.5 0ZM2.5 12H13.5L17.05 7L13.5 2H2.5V12Z" fill="black" fillOpacity="0.6" />
                                        </svg>
                                        Tech
                                    </span>
                                </div>
                                <div className="p-2 cursor-pointer" onClick={() => handleFilterChange('HR')}>
                                    <span className="flex items-center">
                                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 0C14.17 0 14.77 0.33 15.13 0.84L19.5 7L15.13 13.16C14.77 13.67 14.17 14 13.5 14L2.5 13.99C1.4 13.99 0.5 13.1 0.5 12V2C0.5 0.9 1.4 0.01 2.5 0.01L13.5 0ZM2.5 12H13.5L17.05 7L13.5 2H2.5V12Z" fill="black" fillOpacity="0.6" />
                                        </svg>
                                        HR
                                    </span>
                                </div>
                                <div className="p-2 cursor-pointer" onClick={() => handleFilterChange('Finance')}>
                                    <span className="flex items-center">
                                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 0C14.17 0 14.77 0.33 15.13 0.84L19.5 7L15.13 13.16C14.77 13.67 14.17 14 13.5 14L2.5 13.99C1.4 13.99 0.5 13.1 0.5 12V2C0.5 0.9 1.4 0.01 2.5 0.01L13.5 0ZM2.5 12H13.5L17.05 7L13.5 2H2.5V12Z" fill="black" fillOpacity="0.6" />
                                        </svg>
                                        Finance
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="">
                    <table className="text-sm text-left w-[600px] rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-[#D9D9D9] dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 border py-3">Name</th>
                                <th scope="col" className="px-6 border py-3">Department</th>
                                <th scope="col" className="px-6 border py-3">Position</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEmployees.map(emp => (
                                <tr key={emp.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium border text-gray-900 whitespace-nowrap dark:text-white">
                                        {emp.name}
                                    </th>
                                    <td className="px-6 py-4 border">
                                        {emp.department}
                                    </td>
                                    <td className="px-6 py-4 border">
                                        {emp.position}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default App;