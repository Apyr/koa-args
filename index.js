function args() {
	return function argsMiddleware(ctx, next) {
		var args;
		function get() {
			if (!args) {
				args = Object.assign({}, ctx.query || {}, ctx.request.body || {}, ctx.params || {});
			}
			return args;
		}
		Object.defineProperty(ctx, 'args', {
			configurable: true,
			enumerable: true,
			get: get
		});
		return next();
	};
}

module.exports = args;