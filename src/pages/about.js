import React from 'react';
import { Link } from 'gatsby';

const about = () => {
    return (
        <div>
           <h1>About This Site</h1> 
           <Link to='/'>Back to Home</Link>
        </div>
    );
};

export default about;