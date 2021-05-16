'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
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
