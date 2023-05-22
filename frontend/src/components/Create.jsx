import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { json } from 'react-router-dom';

function Create() {

    const navigate = useNavigate();

        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [age, setAge] = useState(0);

        const [error, setError] = useState("");
 
        console.log(name, email, age);

        const handleSubmit = async (e) => {
            
            e.preventDefault();
            const addUser = {name, email, age}

            const response = await fetch("http://localhost:4000/api/user", {

            method:"POST",
            body: JSON.stringify(addUser),
            headers: {
                "Content-type" : "application/json",
            }

            });

            const result = await response.json();
            if(!result.ok){
                console.log(result.error);
                setError(result.error)
            }
            if(result.ok){
                console.log(result);
                setName("");
                setEmail("");
                setAge(0);
                navigate("/all-posts");
            }

        }


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

export default Create;