module.exports = async (ctx, next) => {
	if (ctx.state.user) {
		if (!ctx.request.query.buyer) {
			return ctx.unauthorized('Please specify buyer ID');
		}

		const targetUser = ctx.request.query.buyer.toString();
		const loggedInUser = ctx.state.user.id.toString();

		if (targetUser === loggedInUser) {
			return await next();
		} else {
			return ctx.unauthorized('Target user is not the same as logged in user');
		}
	}

	return ctx.unauthorized('You need to loggin');
};
