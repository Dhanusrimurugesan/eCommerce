
import React, { useState } from 'react';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    aboutSection: {
      width: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(to right, #ffffff, #f8f8f8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '4rem 2rem',
      boxSizing: 'border-box',
    },
    aboutContent: {
      maxWidth: '1000px',
      textAlign: 'center',
      animation: 'fadeIn 1.5s ease-in-out',
    },
    aboutTitle: {
      fontSize: '3rem',
      marginBottom: '2rem',
      color: isHovered ? '#444' : '#222',
      fontWeight: '700',
      textShadow: isHovered ? '2px 2px 8px rgba(0, 0, 0, 0.1)' : 'none',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      transition: 'all 0.3s ease',
    },
    aboutText: {
      fontSize: '1.25rem',
      color: '#555',
      lineHeight: '1.8',
      marginBottom: '1.5rem',
    },
    divider: {
      height: '2px',
      width: '60%',
      background: '#ccc',
      margin: '3rem auto',
    },
  };

  return (
    <section id="about" style={styles.aboutSection}>
      <div style={styles.aboutContent}>
        <h2
          style={styles.aboutTitle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          About Elegant Edge
        </h2>
        <p style={styles.aboutText}>
          At Elegant Edge, we believe elegance is more than just aesthetics — it’s an immersive experience.
          Our mission is to seamlessly blend timeless sophistication with cutting-edge innovation, delivering
          creations that resonate deeply and inspire lasting impressions. Whether designing stunning interiors,
          crafting premium products, or curating unforgettable brand experiences, our work is grounded in quality,
          creativity, and fearless vision.
        </p>
        <p style={styles.aboutText}>
          Every detail matters. From the sweep of a staircase to the texture of a fabric or the nuance of a logo,
          we believe that mastery lives in the smallest moments. Our team of visionary designers, architects, artists,
          and strategists brings passion, precision, and imagination to every project. Together, we push boundaries
          while honoring the traditions of fine craftsmanship and timeless design.
        </p>
        <p style={styles.aboutText}>
          Elegant Edge is not just about making something beautiful — it’s about telling a story, creating an emotion,
          and shaping an experience that lingers long after the first impression.
        </p>
        <p style={styles.aboutText}>
          Our journey is fueled by innovation, guided by tradition, and inspired by the future.
        </p>
        <div style={styles.divider}></div>
        <h2 style={styles.aboutTitle}>Our Philosophy</h2>
        <p style={styles.aboutText}>
          At our core, Elegant Edge is built on the belief that authenticity, creativity, and craftsmanship
          are the true hallmarks of sophistication. We don’t believe in trends — we believe in timeless statements.
        </p>
        <p style={styles.aboutText}>
          Our creative process is deeply collaborative. We listen, learn, and interpret the essence of your vision
          into designs that are both emotionally resonant and visually stunning.
        </p>
        <p style={styles.aboutText}>
          We are dreamers and builders. Visionaries and craftsmen. Elegant Edge is where artistry meets bold ambition,
          and where every project becomes a legacy of excellence.
        </p>
      </div>
    </section>
  );
};

export default About;