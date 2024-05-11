"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const todos = [];
router.post('/edit', (req, res, next) => {
    const id = req.body.id;
    let found = false;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos[i].text = req.body.text;
            found = true;
        }
    }
    if (found == false) {
        res.status(404).json({ success: false, message: "item not found" });
    }
    else {
        res.status(200).json({ success: true, message: "updated successfully" });
    }
});
router.post('/delete', (req, res, next) => {
    const id = req.body.id;
    let found = false;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            found = true;
            todos.splice(i, 1);
        }
    }
    if (found == false) {
        res.status(404).json({ success: "false", message: "iem not found" });
    }
    else {
        res.status(200).json({ success: true, message: "deleted successfully" });
    }
});
router.post('/', (req, res, next) => {
    const newTodo = {
        id: new Date().toString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(200).json({ todo: newTodo });
});
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
exports.default = router;
