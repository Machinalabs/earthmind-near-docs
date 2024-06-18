import React from 'react';
import { PROJECT_CONFIG } from '../constants';

const StayTuned = () => (
    <div style={{ marginTop: '40px' }}>
        Stay tuned to our <a className='nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]' href={PROJECT_CONFIG.website} target="_blank" rel="noopener noreferrer">website</a> and <a className='nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]' href={PROJECT_CONFIG.discord} target="_blank" rel="noopener noreferrer">community forum</a> for the latest updates and detailed progress reports.
    </div>
);

export default StayTuned;
