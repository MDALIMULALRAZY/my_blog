const router = require("express").Router();
const postController = require('../controller/postController');

router.post("/", postController.post_create);
router.get("/", postController.post_all);
router.get("/posts/:postSlug", postController.post_single);
router.get("/:postId", postController.post_details);
router.put("/:postId", postController.post_update);
router.delete("/:postId", postController.post_delete);

module.exports = router;