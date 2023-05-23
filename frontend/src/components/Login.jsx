import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function registerUser(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/api/register', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            password
          })
        });
      
        const data = await response.json();
      
        console.log(data);
      }
      

    return (
        <div className="container my-2">
            <h1>Login</h1>

            <div className='container my-2'>

                {/* {
                    error && <div className='alert alert-danger'>
                        {error}
                    </div>

                } */}
                <form onSubmit={registerUser}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                        <div id="emailHelp" className="form-text">We'll keep your personal info secure for sure</div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">password</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>

    );


}

export default Login;