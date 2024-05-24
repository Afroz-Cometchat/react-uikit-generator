import React from "react";
import { useState } from "react";

const CometChatAvatar:React.FC = () => {
    const [avatarStyle, setAvatarStyle] = useState({
        borderRadius: "50%",
        width: "70px",
        height: "70px",
        border: "none",
        nameTextColor: "red",
        backgroundSize: "cover",
        backgroundColor: "black",
      });
   
      const updateStyle = (e: any) => {
        setAvatarStyle({ ...avatarStyle, [e.target.name]: e.target.value });
      };
      const profilePic =
    'https://media.istockphoto.com/id/1394637422/photo/confident-handsome-30s-caucasian-millennial-man-businessman.jpg?s=612x612&w=0&k=20&c=yAaiBJ7NNX1dC2XE-HZecZkUF62f-J-ypKiIT_xn7eA=';

  return (
    <div className="generator">
         <input type="text" name="borderRadius" onChange={updateStyle} value={avatarStyle.borderRadius} placeholder="border radius" />
         <input type="text" name="width" onChange={updateStyle} value={avatarStyle.width} placeholder="width" />
         <input type="text" name="height" onChange={updateStyle} value={avatarStyle.height} placeholder="height" />
         <input type="text" name="border" onChange={updateStyle} value={avatarStyle.border} placeholder="border" />
         <input type="text" name="nameTextColor" onChange={updateStyle} value={avatarStyle.nameTextColor} placeholder="name text color" />
         <input type="text" name="backgroundSize" onChange={updateStyle} value={avatarStyle.backgroundSize} placeholder="backgroup size" />
         <input type="text" name="backgroundColor" onChange={updateStyle} value={avatarStyle.backgroundColor} placeholder="backgroud color" />

         <div className="output">
           <pre>{`<CometChatAvatar image={profilePic} avatarStyle={${JSON.stringify(avatarStyle, null, 2)}} />`}</pre>  
         </div> 
         <cometchat-avatar image={profilePic} avatarStyle={JSON.stringify(avatarStyle)} />
      </div>
  );
}

export default CometChatAvatar;
