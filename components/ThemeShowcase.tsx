"use client";

import React from "react";

const theme = {
  colors: {
    primary: "#4e6700",
    onPrimary: "#ffffff",
    primaryDark: "#3b4e00",
    primaryInk: "#222e00",
    primarySoft: "#c4d693",
    surface: "#faf9f8",
    surfaceBright: "#ffffff",
    surfaceContainer: "#f2f2ef",
    onSurface: "#1c2616",
    onSurfaceVariant: "#3b4e00",
    outline: "#c4d693",
    ambientShadow: "rgba(0, 0, 0, 0.04)",
  },
  fonts: {
    headline: "var(--font-manrope), sans-serif",
    body: "var(--font-inter), sans-serif",
  },
  radius: {
    card: "2.5rem",
    pill: "999px",
  },
  ease: "cubic-bezier(0.22, 1, 0.36, 1)",
};

export default function ThemeShowcase() {
  const containerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "4rem 2rem",
    fontFamily: theme.fonts.body,
    backgroundColor: theme.colors.surface,
    color: theme.colors.onSurface,
    minHeight: "100vh",
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: "4rem",
    padding: "2.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderRadius: theme.radius.card,
    border: "1px solid rgba(255, 255, 255, 0.5)",
    boxShadow: `0 12px 40px ${theme.colors.ambientShadow}`,
  };

  const eyebrowStyle: React.CSSProperties = {
    color: theme.colors.primaryInk,
    textTransform: "uppercase",
    letterSpacing: "0.24em",
    fontSize: "0.72rem",
    fontWeight: 800,
    marginBottom: "1rem",
    display: "block",
  };

  const buttonPrimaryStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.75rem",
    minHeight: "3.2rem",
    padding: "0 1.5rem",
    borderRadius: theme.radius.pill,
    color: theme.colors.onPrimary,
    fontSize: "0.72rem",
    fontWeight: 800,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    backgroundImage: `linear-gradient(135deg, ${theme.colors.primaryInk}, ${theme.colors.primary})`,
    boxShadow: "0 14px 28px rgba(34, 46, 0, 0.16)",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    transition: `transform 220ms ${theme.ease}, box-shadow 220ms ${theme.ease}`,
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(24px)",
    border: "1px solid rgba(255, 255, 255, 0.9)",
    borderRadius: theme.radius.card,
    padding: "2.5rem",
    boxShadow: `0 12px 40px ${theme.colors.ambientShadow}`,
    transition: `transform 400ms ${theme.ease}, box-shadow 400ms ${theme.ease}`,
  };

  const heroStyle: React.CSSProperties = {
    textAlign: "center",
    padding: "6rem 1rem",
    background: `linear-gradient(to bottom, transparent, rgba(196, 214, 147, 0.1))`,
    borderRadius: theme.radius.card,
    marginBottom: "4rem",
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: theme.fonts.headline,
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
    lineHeight: 1.1,
    marginBottom: "1.5rem",
    fontWeight: 800,
    color: theme.colors.primaryInk,
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: "1.125rem",
    maxWidth: "600px",
    margin: "0 auto 2.5rem",
    color: theme.colors.onSurfaceVariant,
    lineHeight: 1.6,
  };

  return (
    <div style={containerStyle}>
      <header style={{ marginBottom: "3rem" }}>
        <span style={eyebrowStyle}>React Performance Theme</span>
        <h1 style={{ fontFamily: theme.fonts.headline, fontSize: "2.5rem", color: theme.colors.primaryInk }}>
          MUZARI UI Blueprint
        </h1>
      </header>

      {/* Hero Section */}
      <section style={heroStyle}>
        <span style={eyebrowStyle}>Premier Agricultural Export</span>
        <h2 style={titleStyle}>
          Where Indian Soil <br />
          <span style={{ color: theme.colors.primary }}>Meets International Standards</span>
        </h2>
        <p style={subtitleStyle}>
          Bringing the finest harvest from the heart of India to the global market, with uncompromised quality and sustainable practices.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <button style={buttonPrimaryStyle}>Explore Products</button>
          <button
            style={{
              ...buttonPrimaryStyle,
              backgroundImage: "none",
              backgroundColor: "rgba(196, 214, 147, 0.15)",
              color: theme.colors.primaryInk,
              border: "1px solid rgba(196, 214, 147, 0.4)",
              boxShadow: "none",
            }}
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Feature Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
        <div style={cardStyle}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <div
              style={{
                width: "0.55rem",
                height: "0.55rem",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${theme.colors.primaryInk}, ${theme.colors.primary})`,
                marginRight: "0.5rem",
                boxShadow: "0 0 0 6px rgba(78, 103, 0, 0.14)",
              }}
            />
            <span style={{ ...eyebrowStyle, marginBottom: 0 }}>Quality Assurance</span>
          </div>
          <h3 style={{ fontFamily: theme.fonts.headline, fontSize: "1.5rem", marginBottom: "1rem" }}>
            Sustainable Sourcing
          </h3>
          <p style={{ fontSize: "0.95rem", color: theme.colors.onSurfaceVariant }}>
            We work directly with local farmers to ensure every product meets our rigorous global standards.
          </p>
        </div>

        <div style={cardStyle}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <div
              style={{
                width: "0.55rem",
                height: "0.55rem",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${theme.colors.primaryInk}, ${theme.colors.primary})`,
                marginRight: "0.5rem",
                boxShadow: "0 0 0 6px rgba(78, 103, 0, 0.14)",
              }}
            />
            <span style={{ ...eyebrowStyle, marginBottom: 0 }}>Global Logistics</span>
          </div>
          <h3 style={{ fontFamily: theme.fonts.headline, fontSize: "1.5rem", marginBottom: "1rem" }}>
            Farm to Port
          </h3>
          <p style={{ fontSize: "0.95rem", color: theme.colors.onSurfaceVariant }}>
            Advanced logistics tracking ensures your shipment arrives fresh and on schedule.
          </p>
        </div>
      </div>
    </div>
  );
}
