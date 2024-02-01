'use strict';

/**
 * coins-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::coins-info.coins-info');
