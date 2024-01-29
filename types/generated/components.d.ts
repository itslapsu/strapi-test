import type { Schema, Attribute } from '@strapi/strapi';

export interface MainTags extends Schema.Component {
  collectionName: 'components_main_tags';
  info: {
    displayName: 'Tags';
    description: '';
  };
  attributes: {
    tagName: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'main.tags': MainTags;
    }
  }
}
