const express = require('express');
const router = express.Router();
const { getNews, addNews, updateNews, deleteNews } = require('../controllers/newsController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getNews);
router.post('/', protect, addNews);
router.put('/:id', protect, updateNews);
router.delete('/:id', protect, deleteNews);

module.exports = router;