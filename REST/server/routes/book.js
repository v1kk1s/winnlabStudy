import express, { Router } from 'express';
import Book from '../data/models/book';

const router = express.Router();

router.get('/', async (req, res) => {
  res.send(await Book.find());
});

router.post('/', async (req, res) => {
  res.send(await Book.create(req.body));
});

export default router;