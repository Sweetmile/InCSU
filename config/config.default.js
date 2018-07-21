'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1532140785899_7288';

  // add your config here
  config.middleware = [];

  return config;
};
