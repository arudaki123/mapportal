import React, { useState } from 'react';
import CodeBlock from '@theme-original/CodeBlock'; // Import the original CodeBlock component
import CopyButton from '@theme/CodeBlock/CopyButton';// Reuse the built-in CopyButton component

import './styles.css'; // Custom CSS for sticky header

export default function CustomCodeBlock(props) {
  // State for hovering the code block
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="custom-code-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
        {/* Sticky header with Copy button */}
        <div className="custom-code-block-header">
            <CopyButton code={props.children} /> {/* Built-in Docusaurus Copy Button */}
        </div>

        {/* Render the original CodeBlock component */}
        <CodeBlock {...props} />
        </div>
    );
}
