import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiGithub, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
    const [form, setForm] = useState({ name: '', subject: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(form.subject || 'Portfolio Contact');
        const body = encodeURIComponent(
            `Hi Salman,\n\nMy name is ${form.name}.\n\n${form.message}`
        );
        const gmailUrl = `https://mail.google.com/mail/?view=cm&to=salmanfaris.n@gmail.com&su=${subject}&body=${body}`;
        window.open(gmailUrl, '_blank');
    };

    const contactInfo = [
        { icon: <FiMail size={20} />, label: 'salmanfaris.n@gmail.com', href: 'https://mail.google.com/mail/?view=cm&to=salmanfaris.n@gmail.com' },
        { icon: <FiPhone size={20} />, label: '+91 8921301690', href: null },
        { icon: <FiMapPin size={20} />, label: 'Kochi, Kerala, India', href: null },
    ];

    const socials = [
        { icon: <FiGithub size={22} />, href: 'https://github.com/Salmaan-Faaris', label: 'GitHub' },
        { icon: <FaLinkedinIn size={22} />, href: 'https://linkedin.com/in/salmaanfaaris', label: 'LinkedIn' },
    ];

    const inputStyle = {
        width: '100%',
        padding: '14px 18px',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-color)',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        fontSize: '0.95rem',
        fontFamily: 'Inter, sans-serif',
        outline: 'none',
        transition: 'border-color 0.3s, box-shadow 0.3s',
    };

    return (
        <section id="contact" style={{ position: 'relative' }}>
            <div className="section-container">
                <ScrollReveal>
                    <h2 className="section-title gradient-text">Get In Touch</h2>
                    <p className="section-subtitle">
                        Have a project idea or want to collaborate? Let's connect!
                    </p>
                </ScrollReveal>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: 40,
                    alignItems: 'start',
                }}>
                    {/* Contact Form */}
                    <ScrollReveal delay={0.1}>
                        <form onSubmit={handleSubmit} style={{
                            background: 'var(--bg-surface)',
                            border: '1px solid var(--border-color)',
                            borderRadius: 'var(--radius-lg)',
                            padding: 32,
                        }}>
                            <div style={{ marginBottom: 20 }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: 8,
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    color: 'var(--text-secondary)',
                                }}>
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    placeholder="Enter Your Name"
                                    required
                                    style={inputStyle}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'var(--color-primary)';
                                        e.target.style.boxShadow = '0 0 0 3px var(--glow-primary)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'var(--border-color)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: 20 }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: 8,
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    color: 'var(--text-secondary)',
                                }}>
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    value={form.subject}
                                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                    placeholder="Enter Subject"
                                    style={inputStyle}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'var(--color-primary)';
                                        e.target.style.boxShadow = '0 0 0 3px var(--glow-primary)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'var(--border-color)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: 24 }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: 8,
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    color: 'var(--text-secondary)',
                                }}>
                                    Message
                                </label>
                                <textarea
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    placeholder=""
                                    required
                                    rows={5}
                                    style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'var(--color-primary)';
                                        e.target.style.boxShadow = '0 0 0 3px var(--glow-primary)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'var(--border-color)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                            </div>
                            <motion.button
                                type="submit"
                                className="btn-primary"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={{ width: '100%', justifyContent: 'center' }}
                            >
                                Send Message <FiSend />
                            </motion.button>
                        </form>
                    </ScrollReveal>

                    {/* Contact Info Card */}
                    <ScrollReveal delay={0.2}>
                        <div style={{
                            background: 'var(--bg-surface)',
                            border: '1px solid var(--border-color)',
                            borderRadius: 'var(--radius-lg)',
                            padding: 32,
                        }}>
                            <h3 style={{
                                fontSize: '1.15rem',
                                fontWeight: 700,
                                marginBottom: 24,
                            }}>
                                Contact Information
                            </h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 36 }}>
                                {contactInfo.map((info) => (
                                    <div key={info.label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                                        <div style={{
                                            width: 44,
                                            height: 44,
                                            borderRadius: 'var(--radius-sm)',
                                            background: 'rgba(108,99,255,0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--color-primary)',
                                            flexShrink: 0,
                                        }}>
                                            {info.icon}
                                        </div>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                style={{
                                                    color: 'var(--text-secondary)',
                                                    fontSize: '0.9rem',
                                                    transition: 'color 0.3s',
                                                }}
                                                onMouseEnter={(e) => (e.target.style.color = 'var(--color-primary)')}
                                                onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                                            >
                                                {info.label}
                                            </a>
                                        ) : (
                                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                                {info.label}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <h4 style={{
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                color: 'var(--text-secondary)',
                                marginBottom: 16,
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                            }}>
                                Follow Me
                            </h4>
                            <div style={{ display: 'flex', gap: 12 }}>
                                {socials.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -4, scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            width: 48,
                                            height: 48,
                                            borderRadius: 'var(--radius-md)',
                                            background: 'var(--bg-primary)',
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
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
