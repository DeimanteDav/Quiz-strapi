'use strict';

/**
 * recommended-question service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recommended-question.recommended-question');
