import { createServer } from 'http';
import { fetchBestStories, getBestStories } from './handlers/articles';

const handler = (req, res) => {
  if (req.url === '/') {
    res.end('Hello!');
  }

  if (req.url === '/fetch') {
    fetchBestStories(res);
  }

  if (req.url === '/get') {
    getBestStories(res);
  }
}

const server = createServer(handler);
server.listen(3000);