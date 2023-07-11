import module from "./module.ts";

const COLLECTION_NAME = "effects";
const ID_FIELD = "effectId";

export default {
  getAll: (layoutId) => module.getAll(layoutId, COLLECTION_NAME),
  getById: (layoutId, effectId) =>
    module.getById(layoutId, effectId, ID_FIELD, COLLECTION_NAME),
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
