import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobPostingForm from '../components/JobPostingForm';
import JobListingManager from '../components/JobListingManager';
import JobPostSuccessNotification from '../components/JobPostSuccessNotification';

const EmployerDashboard = () => {
    return (
        <div style={{ backgroundColor: '#F5F5F5', fontFamily: '"Roboto", sans-serif', padding: '24px' }}>
            <Header />
            <div style={{ maxWidth: '80%', margin: '0 auto', backgroundColor: '#FFFFFF', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '24px' }}>
                <h1 style={{ color: '#212121', fontSize: '24px', fontWeight: '700', lineHeight: '1.5', margin: '0 0 16px' }}>Employer Dashboard</h1>
                <JobPostingForm />
                <JobPostSuccessNotification />
                <JobListingManager />
            </div>
            <Footer />
        </div>
    );
};

export default EmployerDashboard;