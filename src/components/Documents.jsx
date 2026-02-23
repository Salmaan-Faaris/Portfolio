import { motion } from 'framer-motion';
import { FiFileText, FiAward, FiDownload, FiExternalLink } from 'react-icons/fi';
import ScrollReveal from './ScrollReveal';
import documents from '../data/documents.json';

function DocumentCard({ doc, featured }) {
    const isResume = doc.type === 'resume';
    const isInternship = doc.type === 'internship';
    const Icon = isResume ? FiFileText : isInternship ? FiAward : FiFileText;
    const accentColor = isResume ? 'var(--color-primary)' : 'var(--color-accent)';
    const glowColor = isResume ? 'var(--glow-primary)' : 'var(--glow-accent)';
    const bgTint = isResume
        ? 'rgba(108, 99, 255, 0.08)'
        : 'rgba(0, 212, 255, 0.08)';

    return (
        <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: featured ? 32 : 24,
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                cursor: 'default',
                transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 12px 40px ${glowColor}`;
                e.currentTarget.style.borderColor = accentColor;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--border-color)';
            }}
        >
            {/* Icon badge */}
            <div style={{
                width: featured ? 56 : 48,
                height: featured ? 56 : 48,
                borderRadius: 'var(--radius-md)',
                background: bgTint,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: accentColor,
                flexShrink: 0,
            }}>
                <Icon size={featured ? 26 : 22} />
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 6,
                    flexWrap: 'wrap',
                }}>
                    <h3 style={{
                        fontSize: featured ? '1.25rem' : '1.05rem',
                        fontWeight: 700,
                        lineHeight: 1.3,
                    }}>
                        {doc.title}
                    </h3>
                    <span style={{
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        color: accentColor,
                        background: bgTint,
                        padding: '3px 10px',
                        borderRadius: 'var(--radius-sm)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                    }}>
                        {doc.type}
                    </span>
                </div>

                <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: 4,
                }}>
                    {doc.description}
                </p>

                <span style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                }}>
                    {doc.date}
                </span>
            </div>

            {/* Action buttons */}
            <div style={{
                display: 'flex',
                gap: 10,
                flexWrap: 'wrap',
            }}>
                <a
                    href={doc.file}
                    download
                    className="btn-primary"
                    style={{
                        padding: featured ? '12px 28px' : '10px 22px',
                        fontSize: featured ? '0.95rem' : '0.85rem',
                        textDecoration: 'none',
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <FiDownload size={16} />
                    Download
                </a>
                <a
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{
                        padding: featured ? '12px 28px' : '10px 22px',
                        fontSize: featured ? '0.95rem' : '0.85rem',
                        textDecoration: 'none',
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <FiExternalLink size={16} />
                    View
                </a>
            </div>

            {/* Decorative glow */}
            <div style={{
                position: 'absolute',
                bottom: -30,
                right: -30,
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: bgTint,
                filter: 'blur(20px)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                top: -20,
                left: -20,
                width: 50,
                height: 50,
                borderRadius: '50%',
                background: bgTint,
                filter: 'blur(18px)',
                pointerEvents: 'none',
            }} />
        </motion.div>
    );
}

export default function Documents() {
    const resume = documents.filter((d) => d.type === 'resume');
    const internshipDocs = documents.filter((d) => d.type === 'internship');

    return (
        <section id="documents" style={{ position: 'relative' }}>
            <div className="section-container">
                <ScrollReveal>
                    <h2 className="section-title gradient-text">Documents</h2>
                    <p className="section-subtitle">
                        Download my resume and internship documents
                    </p>
                </ScrollReveal>

                {/* Resume — featured */}
                {resume.length > 0 && (
                    <div style={{ marginBottom: 40 }}>
                        <ScrollReveal>
                            <h3 style={{
                                fontSize: '1.15rem',
                                fontWeight: 600,
                                color: 'var(--color-primary)',
                                marginBottom: 16,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                            }}>
                                <FiFileText size={18} />
                                Resume
                            </h3>
                        </ScrollReveal>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                            gap: 20,
                        }}>
                            {resume.map((doc, index) => (
                                <ScrollReveal key={doc.id} delay={index * 0.1}>
                                    <DocumentCard doc={doc} featured />
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                )}

                {/* Certificates */}
                {internshipDocs.length > 0 && (
                    <div>
                        <ScrollReveal>
                            <h3 style={{
                                fontSize: '1.15rem',
                                fontWeight: 600,
                                color: 'var(--color-accent)',
                                marginBottom: 16,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                            }}>
                                <FiAward size={18} />
                                Internship Documents
                            </h3>
                        </ScrollReveal>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                            gap: 20,
                        }}>
                            {internshipDocs.map((doc, index) => (
                                <ScrollReveal key={doc.id} delay={index * 0.1}>
                                    <DocumentCard doc={doc} />
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
