'use strict';

/**
 * site-information service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::site-information.site-information');
