import React from 'react';

const Quote = ({ children }) => (
    <blockquote style={{ fontStyle: 'italic', color: '#555', borderLeft: '4px solid #ccc', paddingLeft: '10px', margin: '10px 0' }}>
        {children}
    </blockquote>
);

export default Quote;
