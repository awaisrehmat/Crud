import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Posts() {

    const [data, setData] = useState();
    const [error, setError] = useState("");


    async function getData() {
        const response = await fetch("http://localhost:4000/api/user")
        const result = await response.json();
        if (!response.ok) {
            console.log(result.error);
            setError(result.error)
        }
        if (response.ok) {
            setData(result);
        }
    }



    console.log(data);



    // deletion
    // const handleDelete = async (id) => {

    //     const response = await fetch('http://localhost:4000/api/user/${id}', {
    //             method: "DELETE"
    //         });

    //     const result = await response.json();

    //     if (!response.ok) {
    //         console.log(result.error);
    //         setError(result.error)
    //     }
    //     if (response.ok) {
    //         setError("Deleted successfully");
    //         setTimeout(() => {
    //             setError("");
    //             getData();

    //         }, 2000);
    //     }


    // }
    const handleDelete = (id) => {
        fetch(`http://localhost:4000/api/user/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    setError("Deleted successfully");
                    setTimeout(() => {
                        setError("");
                        getData();

                    }, 2000);

                } else {
                    setError('Failed to delete user!');
                    // Handle error scenarios or display error message to the user
                }
            })
            .catch(error => {
                console.error('An error occurred during delete:', error);
                // Handle network errors or display error message to the user
            });
    };

    useEffect(() => {

        getData();

    }, []);


    return (

        <div className="container my-2">
            <div className="row">

                {
                    error && <div className='alert alert-danger'>
                        {error}
                    </div>


                }
                {
                    data?.map((ele) => (

                        <div key={ele._id} className="col-3">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{ele.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                                    <p className="card-text">{ele.age}</p>
                                    <p>{ele._id}</p>
                                    <Link to={`/${ele._id}`} className="card-link">Edit</Link>
                                    <a style={{ cursor: 'pointer' }} className="card-link" onClick={() => handleDelete(ele._id)}>Delete</a>
                                </div>
                            </div>

                        </div>

                    ))

                }

            </div>


        </div>

    );
}

export default Posts;
