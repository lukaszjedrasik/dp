const middleware = {}

middleware['AuthGuard'] = require('@/middleware/AuthGuard.js');
middleware['AuthGuard'] = middleware['AuthGuard'].default || middleware['AuthGuard']

export default middleware
