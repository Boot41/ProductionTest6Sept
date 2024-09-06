import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobPostingForm from '../components/JobPostingForm';
import JobListingManager from '../components/JobListingManager';

const EmployerDashboard = () => {
    return (
        <div style={{ backgroundColor: '#F5F5F5', fontFamily: '"Roboto", sans-serif', padding: '24px' }}>
            <Header />
            <div style={{ width: '80%', margin: '0 auto', backgroundColor: '#FFFFFF', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '24px' }}>
                <h1 style={{ color: '#212121', fontSize: '24px', fontWeight: '700', lineHeight: '1.5' }}>Employer Dashboard</h1>
                <p style={{ color: '#757575', fontSize: '14px', lineHeight: '1.6' }}>The EmployerDashboard page integrates essential components such as the Header, Footer, JobPostingForm, and JobListingManager. This holistic layout is designed to offer employers a user-friendly interface for managing job listings, supported with real-time updates and efficient control options.</p>
                <JobPostingForm />
                <JobListingManager />
            </div>
            <Footer />
        </div>
    );
};

export default EmployerDashboard;