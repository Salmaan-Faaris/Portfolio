import { motion } from 'framer-motion';
import { FiGithub, FiMail, FiArrowUp, FiHeart } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer style={{
            background: 'var(--bg-surface)',
            borderTop: '1px solid var(--border-color)',
            padding: '40px 24px 24px',
        }}>
            <div style={{
                maxWidth: 1200,
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 24,
            }}>
                {/* Back to Top */}
                <motion.button
                    onClick={scrollToTop}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        background: 'var(--gradient-1)',
                        border: 'none',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 4px 20px var(--glow-primary)',
                    }}
                    aria-label="Back to top"
                >
                    <FiArrowUp size={20} />
                </motion.button>

                {/* Social Links */}
                <div style={{ display: 'flex', gap: 16 }}>
                    {[
                        { icon: <FiGithub size={18} />, href: 'https://github.com/salmaan-faaris', label: 'GitHub' },
                        { icon: <FaLinkedinIn size={18} />, href: 'https://linkedin.com/in/salmaanfaaris', label: 'LinkedIn' },
                        { icon: <FiMail size={18} />, href: 'https://mail.google.com/mail/?view=cm&to=salmanfaris.n@gmail.com', label: 'Email' },
                    ].map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--text-muted)',
                                transition: 'color 0.3s',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                            aria-label={social.label}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                }}>
                    © {new Date().getFullYear()} Salman Faris N. Built with <FiHeart size={12} style={{ color: 'var(--color-accent-2)' }} /> using React & Vite
                </p>
            </div>
        </footer>
    );
}
