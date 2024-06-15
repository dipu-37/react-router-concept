import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name}=user;
    return (
        <div>
            <h3>hi user details name is :{name}</h3>
        </div>
    );
};

export default UserDetails;