'use strict';

/**
 * `email` service.
 */

module.exports = {
	// exampleService: (arg1, arg2) => {
	//   return isUserOnline(arg1, arg2);
	// }

	sendEmail: async (subject, html) => {
		await strapi.plugins['email'].services.email.send({
			to: 'nvbpwkumdkamehyegl@miucce.com',
			from: 'Strapitest@localhost.com',
			replayTo: 'indigowebdev@gmail.com',
			subject,
			html,
		});
	},
};
