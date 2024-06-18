import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

import { PROJECT_CONFIG } from "./constants";

const logoStyle = {
    display: "flex",
    alignItems: "center",
    fontSize: "1.45rem",
    fontWeight: "bold",
};

const config: DocsThemeConfig = {
    logo: (
        <div style={logoStyle}>
            <img height="25" width="25" src="/images/logo.png" />
            <span className="custom-header" style={{ marginLeft: "8px" }}>
                {PROJECT_CONFIG.name} Docs
            </span>
        </div>
    ),
    logoLink: "/",
    project: {
        link: PROJECT_CONFIG.repository,
    },
    chat: {
        link: PROJECT_CONFIG.discord,
    },
    docsRepositoryBase: PROJECT_CONFIG.repository,
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content={PROJECT_CONFIG.name} />
            <meta property="og:description" content={PROJECT_CONFIG.description} />
            {/* Favicons */}
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
            <link rel="manifest" href="/favicons/site.webmanifest" />
            <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        </>
    ),
    footer: {
        text: (
            <span>
                {new Date().getFullYear()} ©{' '}
                <a href={PROJECT_CONFIG.website} target="_blank">
                    {PROJECT_CONFIG.footer}
                </a>
                . All Rights Reserved.
            </span>
        )
    },
    useNextSeoProps: () => {
        return {
            titleTemplate: `${PROJECT_CONFIG.name} Docs - %s`,
        };
    },
}

export default config

