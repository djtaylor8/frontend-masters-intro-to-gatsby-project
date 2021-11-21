import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';


export default function IndexPage() {
    const data = useStaticQuery(graphql `
        query GetSiteTitle {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    const meta = data?.site?.siteMetadata ?? {};

    return (
        <>
        <header>
            <Link to='/'>{meta.title}</Link>
        </header>
        <div>
            <h1>Hello Frontend Masters!</h1>
            <Link to='/about'>About</Link>
        </div>
        </>
    );
};
