import { useEffect, useState } from "react";
import CometChatAvatar from "../CometChatAvatar";
import { UIKitSettingsBuilder } from "@cometchat/uikit-shared";
import { CometChatConstants } from "../../constants";
import { CometChatUIKit } from "@cometchat/chat-uikit-react";

function App() {
    const initCometChat = async () => {
        const UIKitSettings = new UIKitSettingsBuilder()
        .setAppId(CometChatConstants.appId)
        .setRegion(CometChatConstants.region)
        .setAuthKey(CometChatConstants.authKey)
        .subscribePresenceForAllUsers()
        .build();
      await CometChatUIKit?.init(UIKitSettings);
      console.log("cometchat init success");
    }
      console.log("init success");
    useEffect(() => {
        initCometChat()
    }, [])
  return (
    <div className="generator">
         <CometChatAvatar />
      </div>
  );
}

export default App;
