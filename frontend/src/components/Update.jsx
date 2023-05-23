import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Update() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);

    const [error, setError] = useState("");


    const { id } = useParams();

    const getSingleUser = async () => {
        const response = await fetch(`http://localhost:4000/api/user/${id}`)
        const result = await response.json();

        if (!response.ok) {
            setError(result.error)
        }

        if (response.ok) {
            setError("");
            console.log("updated user", result);
            setName(result.name);
            setEmail(result.email);
            setAge(result.age);
        }

    };


    const handleSubmit = async (e) => {

        e.preventDefault();
        const UpdateUser = { name, email, age };

        try {
            const response = await fetch(`http://localhost:4000/api/user/${id}`, {
              method: "PATCH",
              body: JSON.stringify(UpdateUser),
              headers: {
                "Content-type": "application/json",
              },
            });
          
            const result = await response.json();
          
            if (!response.ok) {
              console.log(result.error);
              setError(result.error);
            } else {
              setError("");
              console.log(result);
              // navigate("/all-posts");
            }
          } catch (error) {
            console.error("Error:", error);
            // Handle the error appropriately, e.g., setError(error.message);
          }
          

    }


    useEffect(() => {

        getSingleUser();

    }, []);

    return (
        <div className='container my-2'>

        {
            error && <div className='alert alert-danger'>
                {error}
            </div>


        }
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
                <div id="emailHelp" className="form-text">We'll keep your personal info secure for sure</div>
            </div>

            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label className="form-label">Age</label>
                <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    );


}

export default Update;