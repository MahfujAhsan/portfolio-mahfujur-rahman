import React from 'react';

const Footer = () => {
    const timeZone = new Date().getFullYear();;
    return (
        <div className='py-3 font-monospace fs-5 text-white text-center'>
            <p><small>© {timeZone} All Rights Reserved By 'Mahfujur Rahman'</small></p>
        </div>
    );
};

export default Footer;