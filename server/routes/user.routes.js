const router = require("express").Router();

const {
  index,
  store,
  details,
  update,
  destroy,
} = require("../controllers/UserController");

router.get('/', index);
router.post('/', store);
router.get('/:id', details);
router.patch('/:id', update);
router.delete('/:id', destroy);

module.exports = router;