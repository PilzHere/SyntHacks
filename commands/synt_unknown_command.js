module.exports = {
	name: "synt_unknown_command",
	description: "synt unknown command",
	execute(message, args) {
		message.channel.send(
			"**``" +
				args[1] +
				"``**" +
				" Is not a known word in **" +
				args[0] +
				"**.\n" +
				"Type **``synt " +
				args[0] +
				" words``** to see a wall of accepted words.\n" +
				"Type **``synt help``** for help."
		);
	},
};
