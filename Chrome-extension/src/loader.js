s = document.createElement("script");
s.src = chrome.extension.getURL("src/chrome-extensiondl.js");


(document.head || document.documentElement).appendChild(s);

window.addEventListener("message", function(e){
	console.log("download:", e);

	var ext = e.data.type.split("/")[1].split(";")[0];
	var filename = e.data.name + "." + ext;

	console.log(filename, chrome);
	chrome.runtime.sendMessage({name: filename, url: e.data.url}, function(res){
		console.log(res);
	});
});