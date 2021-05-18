module.exports = async (ctx, _) => {
	return ctx.unauthorized('This endpoint is closed');
};
