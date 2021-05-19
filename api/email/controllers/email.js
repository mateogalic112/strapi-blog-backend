'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	send: async (ctx) => {
		console.log('Email sent!', ctx);

		const { to, subject, html } = ctx.request.body;

		return await strapi.services.email.sendEmail(to, subject, html);
	},
};
