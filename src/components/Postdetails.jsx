import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const Postdetails = () => {
    const post = useLoaderData();
    const {postId}= useParams()
    const {id, title, body}=post;
    const navigate = useNavigate();
    const handleGoBack = ()=>{
        navigate(-1);
    }
    console.log(postId)
    return (
        <div>
            <h3>POst details about: {id}</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default Postdetails;