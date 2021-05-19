'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

const DEFAULT_FROM = process.env.DEFAULT_FROM || 'mateogalic112@gmail.com';
const DEFAULT_REPLY_TO = process.env.DEFAULT_REPLY_TO || 'mateogalic112@gmail.com';

module.exports = {
	sendEmail: async (to, subject, html) => {
		strapi.plugins['email'].services.email.send({
			to: to,
			from: DEFAULT_FROM,
			replayTo: DEFAULT_REPLY_TO,
			subject,
			html,
		});
		return {
			message: 'Email sent!',
		};
	},
};
