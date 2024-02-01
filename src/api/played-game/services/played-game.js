'use strict';

/**
 * played-game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::played-game.played-game');
