import { useLoaderData } from "react-router-dom";
import User from "./User";


const Users = () => {
    const users =useLoaderData();
    console.log(users);
    return (
        <div>
            <h4>user is here </h4>
            <h3>user: {users.length}</h3>
            <p>how often do you play ?</p>

            <div>
                {
                    users.map(user => <User key={users.id} user={user}></User>)
                }
            </div>
            
        </div>
        
    );
};

export default Users;