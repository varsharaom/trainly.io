var mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;

require('./services/user.service.server');
