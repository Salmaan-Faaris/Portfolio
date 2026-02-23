import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiMail } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

export default function Hero() {

    const scrollTo = (id) => {
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: '120px 24px 80px',
            }}
        >
            {/* Animated Background Orbs */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
                <motion.div
                    animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        position: 'absolute',
                        top: '10%',
                        right: '15%',
                        width: 400,
                        height: 400,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                    }}
                />
                <motion.div
                    animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        position: 'absolute',
                        bottom: '15%',
                        left: '10%',
                        width: 350,
                        height: 350,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                    }}
                />
                <motion.div
                    animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: 250,
                        height: 250,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255,107,107,0.08) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                    }}
                />
            </div>

            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 800 }}>
                <ScrollReveal>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            padding: '8px 20px',
                            borderRadius: 'var(--radius-xl)',
                            background: 'var(--bg-surface)',
                            border: '1px solid var(--border-color)',
                            marginBottom: 24,
                            fontSize: '0.85rem',
                            color: 'var(--text-secondary)',
                        }}
                    >
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                        Open to opportunities
                    </motion.div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                        fontWeight: 800,
                        marginBottom: 8,
                        lineHeight: 1.1,
                    }}>
                        Hi, I'm{' '}
                        <span className="gradient-text">Salman Faris</span>
                    </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <motion.h2
                        style={{
                            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                            fontWeight: 400,
                            color: 'var(--text-secondary)',
                            marginBottom: 24,
                            fontFamily: 'Inter, sans-serif',
                        }}
                    >
                        <span style={{ color: 'var(--color-accent)' }}>AI & Data Science</span> Student · ML/DL Enthusiast · Full-Stack Developer
                    </motion.h2>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <p style={{
                        fontSize: '1.05rem',
                        color: 'var(--text-muted)',
                        maxWidth: 600,
                        margin: '0 auto 40px',
                        lineHeight: 1.7,
                    }}>
                        A highly motivated Computer Science student passionate about developing innovative
                        solutions using cutting-edge AI and Machine Learning technologies. Currently pursuing
                        Integrated M.Sc. in Computer Science (AI & Data Science) at CUSAT.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                    <div style={{
                        display: 'flex',
                        gap: 16,
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginBottom: 48,
                    }}>
                        <button className="btn-primary" onClick={() => scrollTo('#projects')}>
                            View Projects <FiArrowDown />
                        </button>
                        <button className="btn-outline" onClick={() => scrollTo('#contact')}>
                            Contact Me <FiMail />
                        </button>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.5}>
                    <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                        {[
                            { icon: <FiGithub size={20} />, href: 'https://github.com/Salmaan-Faaris', label: 'GitHub' },
                            { icon: <FaLinkedinIn size={20} />, href: 'https://linkedin.com/in/salmaanfaaris', label: 'LinkedIn' },
                            { icon: <FiMail size={20} />, href: 'mailto:salmanfaris.n@gmail.com', label: 'Email' },
                        ].map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -4, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: 'var(--radius-sm)',
                                    background: 'var(--bg-surface)',
                                    border: '1px solid var(--border-color)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--text-secondary)',
                                    transition: 'color 0.3s, border-color 0.3s',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = 'var(--color-primary)';
                                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                    e.currentTarget.style.borderColor = 'var(--border-color)';
                                }}
                                aria-label={social.label}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </ScrollReveal>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    bottom: 40,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8,
                    color: 'var(--text-muted)',
                    fontSize: '0.75rem',
                }}
            >
                <span>Scroll</span>
                <FiArrowDown size={16} />
            </motion.div>
        </section>
    );
}
