'use strict';

/**
 * basic-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::basic-data.basic-data');
