'use strict';

/**
 * unlocked-game controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::unlocked-game.unlocked-game');
