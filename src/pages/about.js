import React from 'react';
import { Link } from 'gatsby';
import { Seo } from '../components/seo';

const about = () => {
    return (
        <>
        <Seo 
            title='About This Site'
            description='More info about this site'
        />
        <div>
           <h1>About This Site</h1> 
           <Link to='/'>Back to Home</Link>
        </div>
        </>
    );
};

export default about;