const middleware = {}

middleware['authenticated'] = require('@/middleware/authenticated.js');
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['autologin'] = require('@/middleware/autologin.js');
middleware['autologin'] = middleware['autologin'].default || middleware['autologin']

middleware['notAuthenticated'] = require('@/middleware/notAuthenticated.js');
middleware['notAuthenticated'] = middleware['notAuthenticated'].default || middleware['notAuthenticated']

export default middleware
