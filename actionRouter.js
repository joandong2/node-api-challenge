const express = require("express");

//const posts = require("../posts/postDb");
const router = express.Router();
const actions = require("./data/helpers/actionModel");

router.get("/", (req, res) => {
    // do your magic!
    actions
        .get()
        .then((actions) => {
            res.status(200).json(actions);
        })
        .catch((err) => {
            console.log("Post get error: ", err);
            res.status(500).json({
                errorMessage: "There was an error retrieving the actions.",
            });
        });
});

router.get("/:id", (req, res) => {
    // do your magic!
    actions
        .get(req.params.id)
        .then((action) => {
            res.status(200).json(action);
        })
        .catch((err) => {
            console.log("Post get error: ", err);
            res.status(500).json({
                errorMessage: "There was an error retrieving the action.",
            });
        });
});

router.post("/", (req, res) => {
    // do your magic!
    if (!req.body) {
        return res.status(400).json({
            message: "Missing post data",
        });
    }

    actions
        .insert(req.body)
        .then((action) => {
            res.status(201).json(action);
        })
        .catch((error) => {
            console.log("Err: " + error);
        });
});

router.put("/:id", (req, res) => {
    // do your magic!
    if (!req.body) {
        return res.status(400).json({
            message: "Missing post data",
        });
    }

    actions
        .update(req.params.id, req.body)
        .then((action) => {
            res.status(200).json(action);
        })
        .catch((error) => {
            console.log("Err: " + error);
        });
});

router.delete("/:id", (req, res) => {
    // do your magic!
    actions
        .remove(req.params.id)
        .then(() => {
            res.status(200).json({
                message: "The action has been removed",
            });
        })
        .catch((error) => {
            console.log("Err: " + error);
        });
});

module.exports = router;
