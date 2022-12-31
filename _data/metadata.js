let data = {
	username: "samkap", // No leading @ here
	homeLabel: "samkapila.com",
	homeUrl: "https://www.samkapila.com",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;