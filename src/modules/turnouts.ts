import module from "./module.ts";

const COLLECTION_NAME = "turnouts";
const ID_FIELD = "turnoutId";

export default {
  getAll: (layoutId) => module.getAll(layoutId, COLLECTION_NAME),
  getById: (layoutId, itemId) =>
    module.getById(layoutId, itemId, ID_FIELD, COLLECTION_NAME),
  handleGetAll: ({ response, params }) =>
    module.handleGetAll({ response, params }, COLLECTION_NAME),
  handleGetById: ({ response, params }) =>
    module.handleGetById(
      { response, params },
      params.id,
      ID_FIELD,
      COLLECTION_NAME,
    ),
};
