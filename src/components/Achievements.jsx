import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import ScrollReveal from './ScrollReveal';
import achievements from '../data/achievements.json';

function AchievementCard({ achievement, isOpen, onToggle }) {
    return (
        <motion.div
            layout
            style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: 24,
                cursor: 'pointer',
                transition: 'box-shadow 0.3s, border-color 0.3s',
                position: 'relative',
                overflow: 'hidden',
            }}
            onClick={onToggle}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 30px var(--glow-accent)';
                e.currentTarget.style.borderColor = 'var(--color-accent)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--border-color)';
            }}
        >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(0,212,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--color-accent)',
                }}>
                    <FiAward size={22} />
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 4,
                    }}>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.3 }}>
                            {achievement.title}
                        </h3>
                        <span style={{ color: 'var(--text-muted)', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                            {isOpen ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
                        </span>
                    </div>
                    <span style={{
                        fontSize: '0.8rem',
                        color: 'var(--color-primary)',
                        fontWeight: 600,
                    }}>
                        {achievement.year}
                    </span>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p style={{
                            marginTop: 16,
                            paddingTop: 16,
                            borderTop: '1px solid var(--border-color)',
                            fontSize: '0.9rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.7,
                        }}>
                            {achievement.description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Decorative */}
            <div style={{
                position: 'absolute',
                bottom: -20,
                right: -20,
                width: 60,
                height: 60,
                borderRadius: '50%',
                background: 'rgba(0,212,255,0.08)',
                filter: 'blur(15px)',
            }} />
        </motion.div>
    );
}

export default function Achievements() {
    const [openId, setOpenId] = useState(null);

    return (
        <section id="achievements" style={{ position: 'relative' }}>
            <div className="section-container">
                <ScrollReveal>
                    <h2 className="section-title gradient-text">Achievements</h2>
                    <p className="section-subtitle">
                        Hackathon wins, internships, and leadership roles
                    </p>
                </ScrollReveal>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
                    gap: 20,
                }}>
                    {achievements.map((ach, index) => (
                        <ScrollReveal key={ach.id} delay={index * 0.1}>
                            <AchievementCard
                                achievement={ach}
                                isOpen={openId === ach.id}
                                onToggle={() => setOpenId(openId === ach.id ? null : ach.id)}
                            />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
