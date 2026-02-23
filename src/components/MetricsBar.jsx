import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function MetricsBar({ label, value, isPercentage = true }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 1500;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    start = end;
                    clearInterval(timer);
                }
                setDisplayValue(Math.round(start * 10) / 10);
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div ref={ref} style={{ marginBottom: 12 }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 6,
                fontSize: '0.85rem',
            }}>
                <span style={{ color: 'var(--text-secondary)' }}>{label}</span>
                <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>
                    {displayValue}{isPercentage ? '%' : ''}
                </span>
            </div>
            <div style={{
                height: 6,
                borderRadius: 3,
                background: 'var(--bg-surface-2)',
                overflow: 'hidden',
            }}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${Math.min(value, 100)}%` } : { width: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    style={{
                        height: '100%',
                        borderRadius: 3,
                        background: 'var(--gradient-1)',
                    }}
                />
            </div>
        </div>
    );
}
