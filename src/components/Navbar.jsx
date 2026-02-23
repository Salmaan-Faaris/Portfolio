import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Documents', href: '#documents' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('#hero');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);

            // Scroll-spy: detect which section is currently in view
            const sections = navLinks.map((l) => l.href.slice(1));
            let current = '#hero';
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150) {
                        current = `#${id}`;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        setActiveSection(href);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="glass"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: scrolled ? '10px 0' : '14px 0',
                transition: 'padding 0.3s ease',
                borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
            }}
        >
            <div style={{
                maxWidth: 1200,
                margin: '0 auto',
                padding: '0 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                {/* Logo — Left */}
                <a
                    href="#hero"
                    onClick={(e) => handleClick(e, '#hero')}
                    style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '1.4rem',
                        fontWeight: 700,
                        background: 'var(--gradient-1)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        flexShrink: 0,
                    }}
                >
                    {'<SF />'}
                </a>

                {/* Centered Nav Links — no border */}
                <div style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                }}>
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href;
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleClick(e, link.href)}
                                style={{
                                    color: isActive ? '#fff' : 'var(--text-secondary)',
                                    fontSize: '0.85rem',
                                    fontWeight: isActive ? 600 : 500,
                                    padding: '8px 18px',
                                    borderRadius: 'var(--radius-lg)',
                                    position: 'relative',
                                    transition: 'all 0.3s ease',
                                    background: isActive
                                        ? 'var(--gradient-1)'
                                        : 'transparent',
                                    boxShadow: isActive
                                        ? '0 0 18px var(--glow-primary), 0 0 36px rgba(108,99,255,0.3)'
                                        : 'none',
                                    textDecoration: 'none',
                                    whiteSpace: 'nowrap',
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive) {
                                        e.currentTarget.style.color = 'var(--text-primary)';
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive) {
                                        e.currentTarget.style.color = 'var(--text-secondary)';
                                        e.currentTarget.style.background = 'transparent';
                                    }
                                }}
                            >
                                {link.label}
                            </a>
                        );
                    })}
                </div>

                {/* Theme Toggle — Right */}
                <button
                    onClick={toggleTheme}
                    style={{
                        background: 'var(--bg-surface-2)',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '8px',
                        cursor: 'pointer',
                        color: 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s',
                        flexShrink: 0,
                    }}
                    aria-label="Toggle theme"
                >
                    {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
                </button>
            </div>
        </motion.nav>
    );
}
