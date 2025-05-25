module.exports.config = {
    name: "salam",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "msg",
  prefix: false,
  category: "imran", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, mesওsageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("السلام عليكم") ||
     react.includes("السلام عليكم و الرحمة") || 
react.includes("assalamu alaikum") ||
react.includes("assalamu alaykum") ||
react.includes("আসসালামু আলাইকুম") ||
react.includes("salamer uttor") ||
react.includes("السلام عليكم") || 
react.includes("السلام") || 
react.includes("असलमु अलैकुम") || 
react.includes("assalamu alaykum ") || 
react.includes("assalamu alaikum") ||
react.includes("সালামের উত্তর") ||  
react.includes("アッサラーム・アライクム") ||
react.includes("阿萨拉穆·阿拉库姆") ||
react.includes("আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি") ||
react.includes("আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি ওয়া বারাকাতুহ") ||
react.includes("🥰")) {
		var msg = {
				body: " ~ وعليكم السلام ورحمه الله وبركاته🥰!🌚"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
