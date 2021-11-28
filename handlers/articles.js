import { fileIsExists, writeFile, readFile } from '../helpers/fs';
import { merge, stringify } from '../helpers/utils';
import { get } from '../helpers/fetch';

const url = 'https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty';
const fileName = 'ids.json';

const createAndAppendToFile = async data => await writeFile(fileName, stringify(data));

const appendToFile = async data => {
  const currentData = await readFile(fileName);
  
  return await writeFile(fileName, stringify(merge(currentData, uniqueData)));
};

const fetchBestStories = async res => {
  const data = await get(url);

  try {
    const isExists = await fileIsExists(fileName);
    console.log(isExists);
    const handler = isExists ? appendToFile : createAndAppendToFile;

    await handler(data);
    res.end('OK')
  } catch {
    res.end('NE OK')
  }
};

const getBestStories = async res => {
  const result = await readFile(fileName) || [];
  res.end(result);
}

export { fetchBestStories, getBestStories };