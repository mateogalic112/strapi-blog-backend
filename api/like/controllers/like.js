'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	/**
	 * Find likes from specific post.
	 *
	 * @return {Object}
	 */

	async find(ctx) {
		let entities;

		const { user } = ctx.state;
		const { postId } = ctx.params;

		// Likes I have received
		if (ctx.query['post.author']) {
			entities = await strapi.services.like.find({
				'post.author': ctx.query['post.author'],
			});

			// Likes my post have received
		} else if (postId) {
			entities = await strapi.services.like.find({
				post: postId,
			});

			//Likes I gave
		} else if (user) {
			entities = await strapi.services.like.find({
				user: user.id,
			});

			// Retrieve all likes
		} else {
			entities = await strapi.services.like.find({});
		}

		return entities.map((entity) => sanitizeEntity(entity, { model: strapi.models.like }));
	},

	/**
	 * Delete like from post.
	 *
	 * @return {Object}
	 */

	async delete(ctx) {
		const { user } = ctx.state;
		const { postId } = ctx.params;

		const entity = await strapi.services.like.delete({
			post: postId,
			user: user.id,
		});

		return sanitizeEntity(entity[0], { model: strapi.models.like });
	},
};
