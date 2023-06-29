import db from '../db/conn.mjs';

export async function getAll() {
  const layouts = await db.collection('layouts').find().toArray();
  return layouts;
}

export async function getById(layoutId) {
  const layouts = await db.collection('layouts').find({ layoutId }).toArray();
  return layouts?.[0];
}

export async function handleGetAll({ response }) {
  console.log('handleGetAll');
  response.type = "application/json";
  response.body = await getAll();
}

export async function handleGetById({ response, params }) { 
  console.log('handleGetById', params);
  response.type = "application/json";
  response.body = await getById(params.layoutId);
}

export default {
  getAll,
  getById,
  handleGetAll,
  handleGetById
};
