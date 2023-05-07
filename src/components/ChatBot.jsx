import Script from "next/script";

function ChatBot() {
  return (
    <div className="exclude">
      <Script
        id="bot1"
        src="https://cdn.botpress.cloud/webchat/v0/inject.js"
        strategy="beforeInteractive"
      />
      <Script
        id="bot2"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.botpressWebChat.init({
              "botId": "0ae85e8a-aaf7-41bb-92a6-21e178d21082",
              "hostUrl": "https://cdn.botpress.cloud/webchat/v0",
              "messagingUrl": "https://messaging.botpress.cloud",
              "clientId": "0ae85e8a-aaf7-41bb-92a6-21e178d21082",
              "botName": "Red Queen AI",
              "avatarUrl": "https://bot-style.vercel.app/umbrella.png",
              "botConversationDescription": "AI Powered by Umbrella Corporation",
              "showBotInfoPage": false,
              "enableConversationDeletion": true,
              "stylesheet": "https://bot-style.vercel.app/botStyle.css",
              "disableAnimations": true,
              "className": 'my-custom-class',
              "containerWidth": "100%25",
              "layoutWidth": "100%25",
              
            });
          `,
        }}
      />
    </div>
  );
}

export default ChatBot;
