import React, { useState } from 'react';
import './Sidebar.css'; // Import the CSS file

const Sidebar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`sidebar ${darkMode ? 'dark' : ''}`}>
            <h2>Market</h2>
            <ul>
                <li>Market Home</li>
                <li>Indices</li>
                <li>Trending Stocks</li>
                <li>News & Updates</li>
                <li>Deals</li>
                <li>FII / DII Activity</li>
                <li>Sectors</li>
                <li>IPO</li>
                <li>Investors</li>
                <li>SME Zone</li>
                <li>Learn</li>
                <li>Investment Cases</li>
            </ul>
            <div className="toggle-container">
                <label>
                    <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
                    Dark Mode
                </label>
            </div>
        </div>
    );
};

export default Sidebar;