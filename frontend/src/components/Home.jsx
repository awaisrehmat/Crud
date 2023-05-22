import React from 'react';
import { Link } from 'react-router-dom';

function Home(){


    return(
        <div className="container my-2">
            <h1>Home</h1>

            <Link to="/login">
            <button className="btn-primary">
                Signin
            </button>
            </Link>

        </div>

    );


}

export default Home;