module.exports = {
	name: "help",
	description: "help",
	execute(message, args) {
		message.channel.send(
			"To use SyntHacks type **``synt``** followed by **``name of programming language``** followed by **``a word; describing what you want information or syntax for``**.\n" +
				"Examples:\n" +
				"**``synt java version``**\n" +
				"**``synt java for-loop``**\n" +
				"**``synt java classes``**\n"
		);
	},
};