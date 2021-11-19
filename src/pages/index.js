import React from 'react';
import { Link } from 'gatsby';


const index = () => {
    return (
        <div>
            <h1>Hello Frontend Masters!</h1>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default index;