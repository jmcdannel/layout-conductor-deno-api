import module from './module.js';

const COLLECTION_NAME = 'effects';
const ID_FIELD = 'effectId';

const config = {
  collectonName: COLLECTION_NAME,
  idField: ID_FIELD
};

export default {
  getAll: (layoutId) => module.getAll(layoutId, COLLECTION_NAME),
  getById:(layoutId, effectId) =>  module.getById(layoutId, effectId, ID_FIELD, COLLECTION_NAME),
  handleGetAll: ({ response, params }) => module.handleGetAll({ response, params }, COLLECTION_NAME),
  handleGetById: ({ response, params }) => module.handleGetById({ response, params }, params.id, ID_FIELD, COLLECTION_NAME)
};
