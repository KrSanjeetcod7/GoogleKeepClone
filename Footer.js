import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer>
                <p>Created With &hearts; Designed by sanjeet singh 	&copy; {year} </p>
            </footer>
        </>
    )
}

export default Footer;
