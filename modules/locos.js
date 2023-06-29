import module from './module.js';

const COLLECTION_NAME = 'locos';
const ID_FIELD = 'locoId';

export default {
  getAll: (layoutId) => module.getAll(layoutId, COLLECTION_NAME),
  getById:(layoutId, effectId) =>  module.getById(layoutId, effectId, ID_FIELD, COLLECTION_NAME),
  handleGetAll: ({ response, params }) => module.handleGetAll({ response, params }, COLLECTION_NAME),
  handleGetById: ({ response, params }) => module.handleGetById({ response, params }, ID_FIELD, COLLECTION_NAME)
};