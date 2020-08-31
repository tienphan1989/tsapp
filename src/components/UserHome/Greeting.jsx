import React, { useState, useEffect } from 'react';

const Greeting = () => {
    const [username, setUsername] = useState(
        () => window.localStorage.getItem("username") || '',
    );

    React.useEffect(() => {
        window.localStorage.setItem('username', username)
    })

    return (
        <div>
            <h1>Welcome home, {username}</h1>
        </div>
    )
}

export default Greeting
