import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillDataProvider = ({ src, width, height, index }) => {
    // Using useInView hook to detect when the component is in view
    const { ref, inView } = useInView({
        triggerOnce: true // Ensures animation triggers only once when the component comes into view
    });

    // Variants for animating the image
    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    // Animation delay calculation based on index
    const animationDelay = 0.3;

    return (
        <motion.div
            ref={ref} // Ref to detect visibility
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"} // Animates when component is in view
            custom={index} // Custom animation value
            transition={{ delay: index * animationDelay }} // Animation delay based on index
        >
            {/* Render the image */}
            <img
                src={src}
                width={width}
                height={height}
                alt='skill image'
            />
        </motion.div>
    );
};

export default SkillDataProvider;
