/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-tag-spacing */
import React from 'react';
import '../MainContent.css';

/* pic.style = `background-image: url(https://sub60.tobit.com/l/${locationId}); width: 57px; height: 57px`; */
/* defaultBackground.style = 'background-image: url(https://sub60.tobit.com/l/152342); width: 57px; height: 57px'; */

// eslint-disable-next-line no-unused-vars
const Sites = (props) => {
    return (
        <div>
            <div className="siteElement" onClick={() => window.open(`https://chayns.net/${props.siteId}`)}>
                <div className="siteIcon">
                    <div
                        id={props.siteId}
                        style={{
                            backgroundImage: `url(https://sub60.tobit.com/l/${props.siteId})`,
                            width: '57px',
                            height: '57px',
                        }}
                    />
                </div>
                <p className="siteName">{props.name}</p>
            </div>
        </div>
    );
};

export default Sites;
