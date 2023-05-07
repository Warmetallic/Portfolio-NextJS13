import Script from "next/script";

function ChatBot() {
  return (
    <div className="bg-red-300 dark:bg-red-300">
      <Script
        src="https://cdn.botpress.cloud/webchat/v0/inject.js"
        strategy="beforeInteractive"
      />
      <Script
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
              "stylesheet": "https://bot-style.vercel.app/botStyle.css"
            });
          `,
        }}
      />
      {/* The rest of your page content */}
    </div>
  );
}

export default ChatBot;
