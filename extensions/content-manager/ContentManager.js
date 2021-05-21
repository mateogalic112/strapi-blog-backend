module.exports = {
	async delete(ctx) {
		const { id, model } = ctx.params;

		const contentManagerService = strapi.plugins['content-manager'].services.contentmanager;

		ctx.body = await contentManagerService.delete({ id, model });
	},
};
