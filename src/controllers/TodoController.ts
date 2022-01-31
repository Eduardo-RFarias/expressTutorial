import express from "express";
import debugLib from "debug";

import Todo from "../models/TodoModel";

const debug = debugLib("expresstutorial:TodoController");

const list: express.RequestHandler = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.json(todos);
  } catch (error) {
    debug(error);
    return res.status(500).json({ success: false, msg: "Unknown error" });
  }
};

const create: express.RequestHandler = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    return res.status(201).json(todo);
  } catch (error) {
    debug(error);
    return res.status(500).json({ success: false, msg: "Unknown error" });
  }
};

const retrieve: express.RequestHandler = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (todo) {
      return res.json(todo);
    }

    return res.status(404).json({ success: false, msg: "Todo not found with given id" });
  } catch (error) {
    debug(error);
    return res.status(500).json({ success: false, msg: "Unknown error" });
  }
};

const update: express.RequestHandler = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);
    return res.json(todo);
  } catch (error) {
    debug(error);
    return res.status(500).json({ success: false, msg: "Unknown error" });
  }
};

const destroy: express.RequestHandler = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    return res.status(204).send();
  } catch (error) {
    debug(error);
    return res.status(500).json({ success: false, msg: "Unknown error" });
  }
};

export default {
  list,
  create,
  retrieve,
  update,
  destroy,
};
