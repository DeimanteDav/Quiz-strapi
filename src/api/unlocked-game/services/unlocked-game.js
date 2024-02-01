'use strict';

/**
 * unlocked-game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::unlocked-game.unlocked-game');
