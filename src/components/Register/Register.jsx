import React from 'react';

const Register = (props) => {
    return (
        <div>
            <form onSubmit={(e) => props.signUp(e)}>

                <div>
                    <label>Username</label>
                    <input placeholder="Username" name="username" onChange={(e) => props.setUsername(e)}/>
                </div>

                <div>
                    <label>Password</label>
                    <input placeholder="Password" name="password" onChange={(e) => props.setPassword(e)} />
                </div>

                {/* <div>
                    <label>
                        <input type="checkbox" name="diabetic" checked={null} onChange={(e) => props.setDiabetic(e)} />
                        Have you been diagnosed with Diabetes?
                    </label>
                </div> */}

                <button type="submit">Submit</button> 
            </form>
        </div>
    )
}

export default Register
