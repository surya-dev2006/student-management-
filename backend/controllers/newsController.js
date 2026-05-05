const News = require('../models/News');

exports.getNews = async (req, res) => {
  const news = await News.find().sort({ pinned: -1, createdAt: -1 });
  res.json(news);
};

exports.addNews = async (req, res) => {
  const news = await News.create(req.body);
  res.status(201).json(news);
};

exports.updateNews = async (req, res) => {
  const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(news);
};

exports.deleteNews = async (req, res) => {
  await News.findByIdAndDelete(req.params.id);
  res.json({ message: 'News deleted' });
};