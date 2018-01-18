import app from './server';
import './data/connectors/';
import './routes/';

app.listen(3000, () => {
  console.log('Server started listening on port 3000.');
});