module.exports = async (ctx, next) => {
	if (ctx.state.user) {
		if (!ctx.params.id) {
			return ctx.unauthorized('No user ID present');
		}

		const targetUser = ctx.params.id.toString();
		const loggedUser = ctx.state.user.id.toString();

		if (targetUser === loggedUser) {
			return await next();
		} else {
			return ctx.unauthorized('Not allowed to view foreign profile');
		}
	}

	return ctx.unauthorized('You need to log in');
};
