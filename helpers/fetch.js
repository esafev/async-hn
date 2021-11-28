import https from 'https';
import { parse } from '../helpers/utils';

const get = url => new Promise((res, rej) => {
  https.get(url, resp => {
    const data = [];
  
    resp.on('data', chunk => {
      data.push(chunk);
    })
  
    resp.on('end', () => res(parse(data)))
  }).on('error', err => rej(err));
})

export { get };