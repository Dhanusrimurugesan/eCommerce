// import React from "react";
// import './terms.css';

// function Terms() {
//     return (
//         <div className="terms-container">
//             <h1>Terms and Conditions</h1>
//             <p>Last updated: {new Date().toLocaleDateString()}</p>

//             <section>
//                 <h2>1. Acceptance of Terms</h2>
//                 <p>By accessing or using The Elegant Edge website (the "Service"), you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, you must refrain from using the Service.</p>
//             </section>

//             <section>
//                 <h2>2. Changes to the Terms</h2>
//                 <p>The Elegant Edge reserves the right to modify or revise these Terms and Conditions at any time. Any changes will be posted on this page with an updated revision date. It is your responsibility to review these terms periodically for updates.</p>
//             </section>

//             <section>
//                 <h2>3. Account Registration</h2>
//                 <p>To access certain features of the Service, you may be required to register an account. You agree to provide accurate and complete information during the registration process and to update it as necessary. You are responsible for maintaining the confidentiality of your account credentials and are solely responsible for any activities that occur under your account.</p>
//             </section>

//             <section>
//                 <h2>4. User Conduct</h2>
//                 <p>You agree not to engage in any activities that: (a) violate any applicable laws or regulations, (b) infringe the intellectual property rights of others, (c) interfere with the operation of the Service, or (d) engage in any activity that may harm the reputation of The Elegant Edge.</p>
//             </section>

//             <section>
//                 <h2>5. Payment Terms</h2>
//                 <p>Payment for services is due as outlined in the agreement between you and The Elegant Edge. We accept payments via credit card, PayPal, and other forms of payment as specified. All payments are non-refundable unless otherwise stated in the agreement.</p>
//             </section>

//             <section>
//                 <h2>6. Limitation of Liability</h2>
//                 <p>The Elegant Edge will not be held liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service. Your sole remedy for dissatisfaction with the Service is to stop using the Service.</p>
//             </section>

//             <section>
//                 <h2>7. Termination</h2>
//                 <p>The Elegant Edge reserves the right to suspend or terminate your access to the Service at its sole discretion, for reasons including, but not limited to, violations of these Terms and Conditions, misuse of the Service, or failure to make timely payments.</p>
//             </section>

//             <section>
//                 <h2>8. Governing Law</h2>
//                 <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising from these terms shall be resolved through binding arbitration in [Location].</p>
//             </section>

//             <section>
//                 <h2>9. Contact Information</h2>
//                 <p>If you have any questions regarding these Terms and Conditions, please contact us at <a href="mailto:info@theelegantedge.com">info@theelegantedge.com</a>.</p>
//             </section>
//         </div>
//     );
// }

// export default Terms;



import React from "react";

const Terms = () => {
    const today = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const styles = {
        container: {
            width: '100%',
            minHeight: '100vh',
            backgroundColor: '#f4f4f4',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '2rem',
            boxSizing: 'border-box',
        },
        content: {
            maxWidth: '900px',
            width: '100%',
            backgroundColor: '#fff',
            padding: '3rem',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            animation: 'fadeIn 1s ease-in-out',
        },
        title: {
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#333',
            textAlign: 'center',
            marginBottom: '1.5rem',
        },
        date: {
            fontSize: '1.125rem',
            color: '#777',
            textAlign: 'center',
            marginBottom: '2rem',
        },
        section: {
            marginBottom: '2rem',
        },
        heading: {
            fontSize: '1.75rem',
            fontWeight: '600',
            color: '#333',
            marginBottom: '1rem',
        },
        text: {
            fontSize: '1.125rem',
            color: '#555',
            lineHeight: '1.8',
            marginBottom: '1rem',
        },
        link: {
            color: '#0077cc',
            textDecoration: 'none',
            fontWeight: '500',
        },
        linkHover: {
            textDecoration: 'underline',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.title}>Terms and Conditions</h1>
                <p style={styles.date}>Last updated: {today}</p>

                <section style={styles.section}>
                    <h2 style={styles.heading}>1. Acceptance of Terms</h2>
                    <p style={styles.text}>
                        By accessing or using The Elegant Edge website (the "Service"), you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, you must refrain from using the Service.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.heading}>2. Changes to the Terms</h2>
                    <p style={styles.text}>
                        The Elegant Edge reserves the right to modify or revise these Terms and Conditions at any time. Any changes will be posted on this page with an updated revision date. It is your responsibility to review these terms periodically for updates.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.heading}>3. Account Registration</h2>
                    <p style={styles.text}>
                        To access certain features of the Service, you may be required to register an account. You agree to provide accurate and complete information during the registration process and to update it as necessary. You are responsible for maintaining the confidentiality of your account credentials and are solely responsible for any activities that occur under your account.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.heading}>4. User Conduct</h2>
                    <p style={styles.text}>
                        You agree not to engage in any activities that: (a) violate any applicable laws or regulations, (b) infringe the intellectual property rights of others, (c) interfere with the operation of the Service, or (d) engage in any activity that may harm the reputation of The Elegant Edge.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.heading}>5. Payment Terms</h2>
                    <p style={styles.text}>
                        Payment for services is due as outlined in the agreement between you and The Elegant Edge. We accept payments via credit card, PayPal, and other forms of payment as specified. All payments are non-refundable unless otherwise stated in the agreement.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.heading}>6. Limitation of Liability</h2>
                    <p style={styles.text}>
                        The Elegant Edge will not be held liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service. Your sole remedy for dissatisfaction with the Service is to stop using the Service.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.heading}>7. Termination</h2>
                    <p style={styles.text}>
                        The Elegant Edge reserves the right to suspend or terminate your access to the Service at its sole discretion, for reasons including, but not limited to, violations of these Terms and Conditions, misuse of the Service, or failure to make timely payments.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.heading}>8. Governing Law</h2>
                    <p style={styles.text}>
                        These Terms and Conditions shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising from these terms shall be resolved through binding arbitration in [Location].
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.heading}>9. Contact Information</h2>
                    <p style={styles.text}>
                        If you have any questions regarding these Terms and Conditions, please contact us at{" "}
                        <a href="mailto:dhanusrimurugesan2003@gmail.com.com" style={styles.link}>info@theelegantedge.com</a>.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Terms;
