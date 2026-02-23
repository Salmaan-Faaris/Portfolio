import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ProjectCard, ProjectModal } from './ProjectCard';
import ScrollReveal from './ScrollReveal';
import projects from '../data/projects.json';

const categories = ['All', 'DL', 'ML', 'Web','Java'];
const categoryLabels = { All: 'All Projects', DL: 'Deep Learning', ML: 'Machine Learning', Web: 'Web Dev', Java: 'Java Programming' };

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

    return (
        <section id="projects" style={{ background: 'var(--bg-surface)', position: 'relative' }}>
            <div className="section-container">
                <ScrollReveal>
                    <h2 className="section-title gradient-text">Projects</h2>
                    <p className="section-subtitle">
                        Research, academic, and personal projects spanning AI, ML, and web development
                    </p>
                </ScrollReveal>

                {/* Filter Tabs */}
                <ScrollReveal delay={0.1}>
                    <div style={{
                        display: 'flex',
                        gap: 8,
                        marginBottom: 40,
                        flexWrap: 'wrap',
                    }}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                style={{
                                    padding: '10px 22px',
                                    borderRadius: 'var(--radius-xl)',
                                    border: '1px solid',
                                    borderColor: activeFilter === cat ? 'var(--color-primary)' : 'var(--border-color)',
                                    background: activeFilter === cat ? 'var(--color-primary)' : 'transparent',
                                    color: activeFilter === cat ? 'white' : 'var(--text-secondary)',
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    fontFamily: 'Inter, sans-serif',
                                }}
                            >
                                {categoryLabels[cat]}
                            </button>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Project Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                    gap: 24,
                }}>
                    {filtered.map((project, index) => (
                        <ScrollReveal key={project.id} delay={index * 0.1}>
                            <ProjectCard
                                project={project}
                                onClick={() => setSelectedProject(project)}
                            />
                        </ScrollReveal>
                    ))}
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <ProjectModal
                            project={selectedProject}
                            onClose={() => setSelectedProject(null)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
