module.exports = async (ctx, next) => {
	if (ctx.state.user) {
		console.log(ctx.state.user);
		// Go to next policy or will reach the controller's action.
		return await next();
	}

	ctx.unauthorized(`You're not logged in!`);
};
