import React from 'react';


const landingPage = ({ searchField, searchChange }) => {
    return(
        <div className= 'pa2' style= {{justifyContent: 'center', alignItems: 'center'}}>
            <h1> Welcome to the Pod Review site! 
                If you are a host, be sure to register and set up a page for your listeners to leave reviews through.
            </h1>
            <input 
            className="pa3  ba b--black bg-grey"
            type="search"
            placeholder="Search Podcasts"
            onChange={ searchChange }
            />
        </div>
    );
}

export default landingPage;