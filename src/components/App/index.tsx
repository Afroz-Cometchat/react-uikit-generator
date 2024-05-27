import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CometChatAvatar from "../CometChatAvatar";
import { UIKitSettingsBuilder } from "@cometchat/uikit-shared";
import { CometChatConstants } from "../../constants";
import { CometChatUIKit } from "@cometchat/chat-uikit-react";
import Home from "../Home";
import MessageList from "../MessageList";

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
      const user = await CometChatUIKit.login("superhero1");
      console.log("logged in success", user);
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
    const getMessageList = () => {
        return (
            <MessageList />
        )
    }
  return (
    <div className="generator">
        <BrowserRouter>
        <Routes>
        <Route path="/" element={getHomePage()} />
        <Route path="/avatar" element={getAvatar()} />
        <Route path="/messagesList" element={getMessageList()} />
        </Routes>
        </BrowserRouter>
         {/* <CometChatAvatar /> */}
      </div>
  );
}

export default App;
