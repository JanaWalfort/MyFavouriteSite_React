/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-tag-spacing */
import React from 'react';
import './MainContent.css';

/* pic.style = `background-image: url(https://sub60.tobit.com/l/${locationId}); width: 57px; height: 57px`; */
/* defaultBackground.style = 'background-image: url(https://sub60.tobit.com/l/152342); width: 57px; height: 57px'; */

// eslint-disable-next-line no-unused-vars
function Sites(props) {
    return (
        <div>
            <div className="siteElement">
                <div className="siteIcon">
                    <div style={{
                        backgroundImage: `url(https://sub60.tobit.com/l/${props.siteId})`,
                        width: '57px',
                        height: '57px',
                    }}
                    />
                </div>
                <p>{props.name}</p>
            </div>
        </div>
    );
}

export default Sites;
