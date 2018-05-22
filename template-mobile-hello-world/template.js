exports.getTemplate = function() {
	return {
		"name": "Hello World with Tabris",
		"description": "Hello World Mobile Application with Tabris",
		"sources": [
		{
			"location": "/template-mobile-hello-world/app.js.template", 
			"action": "generate",
			"rename": "app.js"
		},
		{
			"location": "/template-mobile-hello-world/package.json.template", 
			"action": "generate",
			"rename": "package.json"
		},
		{
			"location": "/template-mobile-hello-world/node_modules/tabris/package.json", 
			"action": "copy",
			"rename": "/node_modules/tabris/package.json"
		},
		{
			"location": "/template-mobile-hello-world/node_modules/tabris/tabris.min.js", 
			"action": "copy",
			"rename": "/node_modules/tabris/tabris.min.js"
		}],
		"parameters": []
	};
};
