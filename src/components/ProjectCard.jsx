import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';
import MetricsBar from './MetricsBar';

const categoryColors = {
    DL: { bg: 'rgba(108,99,255,0.15)', color: '#8b83ff', label: 'Deep Learning' },
    ML: { bg: 'rgba(0,212,255,0.15)', color: '#00d4ff', label: 'Machine Learning' },
    Web: { bg: 'rgba(255,107,107,0.15)', color: '#ff6b6b', label: 'Web Development' },
    Java: { bg: 'rgba(255,159,28,0.15)', color: '#ff9f1c', label: 'Java Programming' },
};

function ProjectCard({ project, onClick }) {
    const cat = categoryColors[project.category] || categoryColors.Web;

    return (
        <motion.div
            layout
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: 24,
                cursor: 'pointer',
                transition: 'box-shadow 0.3s',
                position: 'relative',
                overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 40px var(--glow-primary)';
                e.currentTarget.style.borderColor = 'var(--color-primary)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--border-color)';
            }}
        >
            {/* Category Badge */}
            <span style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: 'var(--radius-xl)',
                background: cat.bg,
                color: cat.color,
                fontSize: '0.75rem',
                fontWeight: 600,
                marginBottom: 16,
                letterSpacing: '0.5px',
            }}>
                {cat.label}
            </span>

            <h3 style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                marginBottom: 10,
                color: 'var(--text-primary)',
                lineHeight: 1.3,
            }}>
                {project.title}
            </h3>

            <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                marginBottom: 16,
                lineHeight: 1.6,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
            }}>
                {project.shortDescription}
            </p>

            {/* Tech Stack */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {project.techStack.slice(0, 4).map((tech) => (
                    <span
                        key={tech}
                        style={{
                            padding: '4px 10px',
                            borderRadius: 'var(--radius-sm)',
                            background: 'var(--bg-surface-2)',
                            color: 'var(--text-muted)',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                        }}
                    >
                        {tech}
                    </span>
                ))}
                {project.techStack.length > 4 && (
                    <span style={{
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-surface-2)',
                        color: 'var(--text-muted)',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                    }}>
                        +{project.techStack.length - 4}
                    </span>
                )}
            </div>

            {/* Decorative Corner */}
            <div style={{
                position: 'absolute',
                top: -30,
                right: -30,
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: cat.bg,
                filter: 'blur(20px)',
            }} />
        </motion.div>
    );
}

function ProjectModal({ project, onClose }) {
    const cat = categoryColors[project.category] || categoryColors.Web;
    const metrics = project.metrics && Object.keys(project.metrics).length > 0;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 2000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0,0,0,0.7)',
                backdropFilter: 'blur(8px)',
                padding: 24,
            }}
        >
            <motion.div
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-xl)',
                    maxWidth: 700,
                    width: '100%',
                    maxHeight: '85vh',
                    overflow: 'auto',
                    padding: 36,
                    position: 'relative',
                }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        background: 'var(--bg-surface-2)',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-sm)',
                        width: 36,
                        height: 36,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: 'var(--text-secondary)',
                        transition: 'all 0.3s',
                    }}
                    aria-label="Close"
                >
                    <FiX size={18} />
                </button>

                {/* Badge */}
                <span style={{
                    display: 'inline-block',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-xl)',
                    background: cat.bg,
                    color: cat.color,
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    marginBottom: 16,
                }}>
                    {cat.label}
                </span>

                <h2 style={{
                    fontSize: '1.6rem',
                    fontWeight: 800,
                    marginBottom: 20,
                    paddingRight: 40,
                    lineHeight: 1.3,
                }}>
                    {project.title}
                </h2>

                <p style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: 28,
                }}>
                    {project.fullDescription}
                </p>

                {/* Metrics */}
                {metrics && (
                    <div style={{
                        background: 'var(--bg-surface-2)',
                        borderRadius: 'var(--radius-md)',
                        padding: 20,
                        marginBottom: 24,
                    }}>
                        <h4 style={{
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            color: 'var(--color-accent)',
                            marginBottom: 16,
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                        }}>
                            Performance Metrics
                        </h4>
                        {Object.entries(project.metrics).map(([key, val]) => (
                            <MetricsBar key={key} label={key} value={val} isPercentage={val > 10} />
                        ))}
                    </div>
                )}

                {/* Tech Stack */}
                <div style={{ marginBottom: 24 }}>
                    <h4 style={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        marginBottom: 12,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                    }}>
                        Technologies
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                style={{
                                    padding: '6px 14px',
                                    borderRadius: 'var(--radius-sm)',
                                    background: 'var(--bg-primary)',
                                    border: '1px solid var(--border-color)',
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.8rem',
                                    fontWeight: 500,
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                            style={{ fontSize: '0.85rem', padding: '10px 20px' }}
                        >
                            <FiGithub /> GitHub
                        </a>
                    )}
                    {project.demoLink && (
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            style={{ fontSize: '0.85rem', padding: '10px 20px' }}
                        >
                            <FiExternalLink /> Live Demo
                        </a>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}

export { ProjectCard, ProjectModal };
