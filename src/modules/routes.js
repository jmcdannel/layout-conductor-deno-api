import module from './module.js';

const COLLECTION_NAME = 'routes';
const ID_FIELD = 'routeId';

const config = {
  collectonName: COLLECTION_NAME,
  idField: ID_FIELD
};

export default {
  getAll: (layoutId) => module.getAll(layoutId, COLLECTION_NAME),
  getById:(layoutId, itemId) =>  module.getById(layoutId, itemId, ID_FIELD, COLLECTION_NAME),
  handleGetAll: ({ response, params }) => module.handleGetAll({ response, params }, COLLECTION_NAME),
  handleGetById: ({ response, params }) => module.handleGetById({ response, params }, params.id, ID_FIELD, COLLECTION_NAME)
};
