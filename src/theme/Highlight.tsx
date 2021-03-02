import React from "react";

const Highlight = ({children, color}) => (
    <span
        style={{
            backgroundColor: color,
            borderRadius: '2px',
            color: '#fff',
            padding: '0.2rem',
            clear: 'both',
        }}>
    {children}
  </span>
);

export default Highlight;
