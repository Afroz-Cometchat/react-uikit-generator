import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CometChatAvatar from "../CometChatAvatar";
import { UIKitSettingsBuilder } from "@cometchat/uikit-shared";
import { CometChatConstants } from "../../constants";
import { CometChatUIKit } from "@cometchat/chat-uikit-react";
import Home from "../Home";

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

    const getHomePage = () => {
        return (
            <Home />
        )
    }
    const getAvatar = () => {
        return (
            <CometChatAvatar />
        )
    }
  return (
    <div className="generator">
        <BrowserRouter>
        <Routes>
        <Route path="/" element={getHomePage()} />
        <Route path="/avatar" element={getAvatar()} />
        </Routes>
        </BrowserRouter>
         {/* <CometChatAvatar /> */}
      </div>
  );
}

export default App;
