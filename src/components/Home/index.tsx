import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const handleAvatarClick = () => {
        navigate('/avatar')
    }
    const handleMessageListClick = () => {
        navigate('/messagesList')
    }
    return (
        <div>
            <button onClick={handleAvatarClick}>CometChat Avatar</button>
            <button onClick={handleMessageListClick}>CometChat Messages List</button>
        </div>
    )
}

export default Home;