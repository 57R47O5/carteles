import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const Profile = () => {
    const {user} = useContext(AuthContext);
    
    return (
        <>
            <div>Perfil</div>
            <br></br>
            <h2>{user.username}</h2>
        </>
    )
}

export default Profile