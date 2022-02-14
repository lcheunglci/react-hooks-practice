import React, {useEffect, useState} from "react";

function GitUser()
{

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users`)
            .then(res => res.json())
            .then(setData);
    }, []);

    if (data) {
        return (
            <section>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>{user.login}</li>
                ))}
            </ul>
            <button onClick={() => setData([]) }>Clear</button>
            </section>
            );
    } else {}
}

export default GitUser;
