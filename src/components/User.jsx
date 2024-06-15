import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email , phone}=user;
    return (
        <div>
           
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{phone}</h3>
            
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;