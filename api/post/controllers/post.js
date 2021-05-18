'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	/**
	 * Fetch all posts from logged in author.
	 *
	 * @return {Object}
	 */

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

	/**
	 * Create a record.
	 *
	 * @return {Object}
	 */

	async create(ctx) {
		const { id } = ctx.state.user;

		const post = {
			...ctx.request.body,
			author: id,
		};

		let entity;
		if (ctx.is('multipart')) {
			const { data, files } = parseMultipartData(ctx);
			entity = await strapi.services.post.create({ ...data, author: id }, { files });
		} else {
			entity = await strapi.services.post.create(post);
		}
		return sanitizeEntity(entity, { model: strapi.models.post });
	},
};
