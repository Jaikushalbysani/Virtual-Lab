import React from 'react';
import './Iwanto.css';

const HostWorkshop = () => {
    return (
        <div className="iwanto-container">
            <h1 className="iwanto-heading">Host Workshop</h1>
            <div className="navbar-options">
                <button className="navbar-option">Gallery</button>
                <button className="navbar-option">Workshops</button>
                <button className="navbar-option">Nodal Centers</button>
                <button className="navbar-option">FAQ</button>
                <button className="navbar-option">Testimonials</button>
            </div>
            <div className="iwanto-content">
                <div className="main-content">
                    <p>This is the Host Workshop page.</p>
                </div>
                <div className="sidebar-right">
                    <h2 className="sidebar-heading">Overview and Motivation</h2>
                    <p className="sidebar-text">This section provides an overview and motivation for hosting workshops.</p>
                    <h2 className="sidebar-heading">Audience</h2>
                    <p className="sidebar-text">This section describes the target audience for the workshops.</p>
                    <h2 className="sidebar-heading">Workshop Requirements</h2>
                    <ul className="sidebar-list">
                        <li>Requirements for Online Workshop</li>
                        <li>Documents to be submitted for Online Workshop</li>
                        <li>Requirements for Onsite Version</li>
                        <li>Documents to be submitted for Onsite Workshop</li>
                    </ul>
                    <h2 className="sidebar-heading">Request a Workshop</h2>
                    <p className="sidebar-text">This section provides information on how to request a workshop.</p>
                </div>
            </div>
        </div>
    );
};

export default HostWorkshop;