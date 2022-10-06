import asyncHandler from "express-async-handler";
import Goal from "../model/goalModel.js";

// CRUD FOR GOALS

// CREATE
const addGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please fill the input fields");
  }

  const goal = await Goal.create({
    text: req.body.text,
    age: req.body.age,
  });

  res.status(200).json(goal);
});

// READ
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

// UPDATE
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found!");
  }

  const updated = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updated);
});

// DELETE
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found!");
  }

  await goal.remove();

  res.status(200).json(deleted);
});

export { getGoals, addGoals, updateGoals, deleteGoals };
