'use strict';

const { default: createStrapi } = require('strapi');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
	lifecycles: {
		async afterDelete(result, _) {
			try {
				const file = await strapi.plugins['upload'].services.upload.fetch({
					id: result.featured_image.id,
				});

				await strapi.plugins['upload'].services.upload.remove(file);
			} catch (err) {
				console.error(err);
			}
		},
	},
};
