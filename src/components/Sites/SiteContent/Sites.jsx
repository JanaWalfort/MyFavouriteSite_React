/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */

import React from 'react';
import '../MainContent.css';

const Sites = ({ siteId, name }) => {
    return (
        <div>
            <div className="siteElement" onClick={() => window.open(`https://chayns.net/${siteId}`)}>
                <div className="siteIcon">
                    <div
                        id={siteId}
                        style={{
                            backgroundImage: `url(https://sub60.tobit.com/l/${siteId})`,
                            width: '57px',
                            height: '57px',
                        }}
                    />
                </div>
                <p className="siteName">{name}</p>
            </div>
        </div>
    );
};

export default Sites;
