const express = require("express");

//const posts = require("../posts/postDb");
const router = express.Router();
const projects = require("./data/helpers/projectModel");

router.get("/", (req, res) => {
    // do your magic!
    projects
        .get()
        .then((posts) => {
            res.status(200).json(posts);
        })
        .catch((err) => {
            console.log("Post get error: ", err);
            res.status(500).json({
                errorMessage: "There was an error retrieving the posts.",
            });
        });
});

router.get("/:id", (req, res) => {
    // do your magic!
    projects
        .get(req.params.id)
        .then((post) => {
            res.status(200).json(post);
        })
        .catch((err) => {
            console.log("Post get error: ", err);
            res.status(500).json({
                errorMessage: "There was an error retrieving the post.",
            });
        });
});

router.get("/:id", (req, res) => {
    // do your magic!
    projects
        .get(req.params.id)
        .then((post) => {
            res.status(200).json(post);
        })
        .catch((err) => {
            console.log("Post get error: ", err);
            res.status(500).json({
                errorMessage: "There was an error retrieving the post.",
            });
        });
});

router.get("/:id/actions", (req, res) => {
    projects
        .getProjectActions(req.params.id)
        .then((actions) => {
            res.status(200).json(actions);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                errorMessage: "There was an error retriecing the actions",
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

    projects
        .insert(req.body)
        .then((project) => {
            res.status(201).json(project);
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

    projects
        .update(req.params.id, req.body)
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((error) => {
            console.log("Err: " + error);
        });
});

router.delete("/:id", (req, res) => {
    // do your magic!
    projects
        .remove(req.params.id)
        .then(() => {
            res.status(200).json({
                message: "The project has been removed",
            });
        })
        .catch((error) => {
            console.log("Err: " + error);
        });
});

module.exports = router;
