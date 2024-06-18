import React from 'react';
import { PROJECT_CONFIG } from '../constants';

const SocialLinks = () => (
    <ul className='nx-mt-6 nx-list-disc first:nx-mt-0 ltr:nx-ml-6 rtl:nx-mr-6'>
        <li className='nx-my-2'>
            <a className='nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]' href={PROJECT_CONFIG.website} target="_blank" rel="noopener noreferrer">
                Official website
            </a>
        </li>
        <li className='nx-my-2'>
            <a className='nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]' href={PROJECT_CONFIG.discord} target="_blank" rel="noopener noreferrer">
                Discord
            </a>
        </li>
        <li className='nx-my-2'>
            <a className='nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]' href={PROJECT_CONFIG.twitter} target="_blank" rel="noopener noreferrer">
                Twitter
            </a>
        </li>
        <li className='nx-my-2'>
            <a className='nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]' href={PROJECT_CONFIG.blog} target="_blank" rel="noopener noreferrer">
                Blog
            </a>
        </li>
        <li className='nx-my-2'>
            <a className='nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]' href={PROJECT_CONFIG.repository} target="_blank" rel="noopener noreferrer">
                Github
            </a>
        </li>
    </ul>
);

export default SocialLinks;
