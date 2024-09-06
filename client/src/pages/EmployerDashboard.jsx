import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobPostingForm from '../components/JobPostingForm';
import JobListingManager from '../components/JobListingManager';

const EmployerDashboard = () => {
    return (
        <div className="bg-primaryBackground min-h-screen font-['Roboto'] flex flex-col">
            <Header />
            <div className="flex-grow px-medium py-large">
                <h1 className="text-heading text-24 font-heading mb-medium">Employer Dashboard</h1>
                <p className="text-body text-14 mb-large">The EmployerDashboard page provides a comprehensive view for employers, integrating essential components such as Header, Footer, the JobPostingForm for job submissions, and JobListingManager for overseeing existing job postings.</p>
                <div className="shadow-md bg-white p-large rounded-lg" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    <JobPostingForm />
                </div>
                <div className="mt-large">
                    <JobListingManager />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EmployerDashboard;