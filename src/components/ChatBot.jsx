"use client";
import React, { useEffect } from "react";

function ChatBot() {
  const initBot = () => {
    window.botpressWebChat.init({
      botId: "0ae85e8a-aaf7-41bb-92a6-21e178d21082",
      hostUrl: "https://cdn.botpress.cloud/webchat/v0",
      messagingUrl: "https://messaging.botpress.cloud",
      clientId: "0ae85e8a-aaf7-41bb-92a6-21e178d21082",
      botName: "Red Queen AI",
      avatarUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
      botConversationDescription: "AI Powered by Umbrella Corporation",
      showBotInfoPage: false,
      enableConversationDeletion: false,
      stylesheet:
        "https://raw.githubusercontent.com/Warmetallic/botStyle/main/botStyle.css",
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v0/inject.js";
    script.async = true;
    script.onload = initBot;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="z-50">
      <div id="botpress-webchat"></div>
    </div>
  );
}

export default ChatBot;
