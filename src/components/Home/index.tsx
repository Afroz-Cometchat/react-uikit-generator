import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const handleAvatarClick = () => {
        navigate('/avatar')
    }
    return (
        <div>
            <button onClick={handleAvatarClick}>CometChat Avatar</button>
        </div>
    )
}

export default Home;