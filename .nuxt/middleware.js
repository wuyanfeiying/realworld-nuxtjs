const middleware = {}

middleware['autherticated'] = require('..\\middleware\\autherticated.js')
middleware['autherticated'] = middleware['autherticated'].default || middleware['autherticated']

middleware['notAuthenticated'] = require('..\\middleware\\notAuthenticated.js')
middleware['notAuthenticated'] = middleware['notAuthenticated'].default || middleware['notAuthenticated']

export default middleware
