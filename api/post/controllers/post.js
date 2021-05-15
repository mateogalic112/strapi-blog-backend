'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	/**
	 * Create a record.
	 *
	 * @return {Object}
	 */

	async create(ctx) {
		let entity;
		if (ctx.is('multipart')) {
			const { data, files } = parseMultipartData(ctx);
			entity = await strapi.services.post.create({ ...data, likes: 0 }, { files });
		} else {
			entity = await strapi.services.post.create({ ...ctx.request.body, likes: 0 });
		}
		return sanitizeEntity(entity, { model: strapi.models.post });
	},

	async me(ctx) {
		const user = ctx.state.user;

		if (!user) {
			return ctx.badRequest(null, [{ messages: [{ id: 'No authorization header was found' }] }]);
		}

		const data = await strapi.services.post.find({ author: user.id });

		if (!data) {
			return ctx.notFound();
		}

		return sanitizeEntity(data, { model: strapi.models.post });
	},
};
