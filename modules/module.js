import db from '../db/conn.mjs';

export async function getAll(layoutId, collectionName = 'layouts') {
  console.log('[MODULE] getAll', layoutId, collectionName);
  const results = await db.collection(collectionName).find({ layoutId }).toArray();
  return results;
}

export async function getById(layoutId, id, idField, collectionName) {
  try {
    const query = { 
      "$match" : {
        [`${collectionName}.${idField}`]: id 
      }
    };
    const projection = { 
      "$project": {
        "obj": {
          $filter: {
            input: `$${collectionName}`,
            as: 'obj',
            cond: {$eq: [`$$obj.${idField}`, id]}
          }
        },
        _id: 0
      }
    };
    const result = await db.collection(collectionName).aggregate( [ query, projection ]).toArray();
    return result?.[0]?.['obj']?.[0];
  } catch(e) {
    console.error(e);
  }
}

export async function handleGetAll({ response, params }, collectionName) {
  console.log('[MODULE] handleGetAll', collectionName);
  response.type = "application/json";
  response.body = await getAll(params.layoutId, collectionName);
}

export async function handleGetById({ response, params }, id, idField, collectionName) { 
  console.log('[MODULE] handleGetById', params, id, idField, collectionName);
  response.type = "application/json";
  response.body = await getById(params.layoutId, parseInt(id), idField, collectionName);
}

export default {
  getAll,
  getById,
  handleGetAll,
  handleGetById
};
