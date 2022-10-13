'use strict';

/**
 * basic-data router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::basic-data.basic-data');
