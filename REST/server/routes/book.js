import express, { Router } from 'express';
import Book from '../data/models/book';

const router = express.Router();

router.get('/', async (req, res) => {
  res.send(await Book.find());
});

router.post('/', async (req, res) => {
  res.send(await Book.create(req.body));
});

router.get('/:bookId', async (req, res) => {
  await Book.findById(req.params.bookId, (err, book) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(book);
    }
  });
});

router.delete('/:bookId', async (req, res) => {
  await Book.deleteOne({ _id: req.params.bookId }, (err, book) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(`Book ${req.params.bookId} was deleted!`);
    }
  });
});

router.put('/:bookId', async (req, res) => {
  await Book.findOneAndUpdate({ _id: req.params.bookId }, req.body);
});

export default router;