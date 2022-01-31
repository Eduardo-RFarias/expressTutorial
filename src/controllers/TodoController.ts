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
    return res.status(500).send("Unknown error");
  }
};

const create: express.RequestHandler = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    return res.status(201).json(todo);
  } catch (error) {
    debug(error);

    if (error instanceof Error && error.message.startsWith("Todo validation failed")) {
      return res.status(400).send(error.message);
    }

    return res.status(500).send("Unknown error");
  }
};

const retrieve: express.RequestHandler = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (todo) {
      return res.json(todo);
    }

    return res.status(404).send("Todo not found with given id");
  } catch (error) {
    debug(error);
    return res.status(500).send("Unknown error");
  }
};

const update: express.RequestHandler = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);

    if (todo) {
      return res.json(todo);
    }

    return res.status(404).send("Todo not found with given id");
  } catch (error) {
    debug(error);
    return res.status(500).send("Unknown error");
  }
};

const destroy: express.RequestHandler = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (todo) {
      return res.status(204).send();
    }

    return res.status(404).send("Todo not found with given id");
  } catch (error) {
    debug(error);
    return res.status(500).send("Unknown error");
  }
};

export default {
  list,
  create,
  retrieve,
  update,
  destroy,
};
