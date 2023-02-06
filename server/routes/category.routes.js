const router = require("express").Router();

const {
  index,
  store,
  details,
  update,
  destroy,
  subCategories,
} = require("../controllers/CategoryController");

router.get('/', index);
router.post('/', store);
router.get('/:category/sub-categories', subCategories);
router.get('/:id', details);
router.patch('/:id', update);
router.delete('/:id', destroy);

module.exports = router;
