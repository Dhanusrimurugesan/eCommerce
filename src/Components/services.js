
import React from 'react';

const Services = () => {
  return (
    <div style={styles.servicesSection}>
      <div style={styles.servicesContent}>
        <h2 style={styles.servicesTitle}>Our Services</h2>

        <div style={styles.servicesGrid}>
          <div style={styles.serviceCard}>
            <h3 style={styles.serviceName}>Luxury Interior Design</h3>
            <p style={styles.serviceDescription}>
              Transforming spaces into timeless expressions of style and sophistication. From concept to completion, we craft interiors that inspire and elevate.
            </p>
          </div>

          <div style={styles.serviceCard}>
            <h3 style={styles.serviceName}>Brand Identity Creation</h3>
            <p style={styles.serviceDescription}>
              Building powerful brands that blend elegance with authenticity. From logo design to full brand storytelling, we bring visions to life.
            </p>
          </div>

          <div style={styles.serviceCard}>
            <h3 style={styles.serviceName}>Event Curation & Styling</h3>
            <p style={styles.serviceDescription}>
              Designing unforgettable experiences, blending creativity, elegance, and precision to make every event extraordinary.
            </p>
          </div>

          <div style={styles.serviceCard}>
            <h3 style={styles.serviceName}>Luxury Product Design</h3>
            <p style={styles.serviceDescription}>
              Crafting exclusive products that embody craftsmanship, innovation, and timeless appeal — tailored to a discerning clientele.
            </p>
          </div>

          <div style={styles.serviceCard}>
            <h3 style={styles.serviceName}>Architectural Visualization</h3>
            <p style={styles.serviceDescription}>
              Bringing your architectural concepts to life with photorealistic renderings and animations that help you visualize every detail before construction.
            </p>
          </div>

          <div style={styles.serviceCard}>
            <h3 style={styles.serviceName}>Custom Furniture Design</h3>
            <p style={styles.serviceDescription}>
              Designing and crafting unique furniture pieces that reflect your style and the essence of your space — from concept to creation, with premium materials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  servicesSection: {
    width: '100%',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #f9f9f9, #ffffff)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5rem 2rem',
    boxSizing: 'border-box',
  },
  servicesContent: {
    width: '100%',
    maxWidth: '1200px',
    textAlign: 'center',
    animation: 'fadeIn 1.5s ease-in-out',
  },
  servicesTitle: {
    fontSize: '3rem',
    marginBottom: '4rem',
    color: '#222',
    fontWeight: '700',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2.5rem',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  serviceCard: {
    background: '#ffffff',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'center',
  },
  serviceCardHover: {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
  },
  serviceName: {
    fontSize: '1.75rem',
    marginBottom: '1rem',
    color: '#333',
    fontWeight: '600',
  },
  serviceDescription: {
    fontSize: '1.125rem',
    color: '#555',
    lineHeight: '1.75',
  },
};

export default Services;
