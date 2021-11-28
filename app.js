import { fileIsExists, appendFile, readFile } from './helpers/fs';
import { merge, stringify } from './helpers/utils';
import { get } from './helpers/fetch';

const hnTopUrl = 'https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty';

const fileName = 'ids.json';

const createAndAppendToFile = data => {
  appendFile(fileName, stringify(data));
};

const appendToFile = async data => {
  const currentData = await readFile(fileName);

  appendFile(fileName, stringify(merge(currentData, uniqueData)));
};

const fetchBestStories = async () => {
  const data = await get(hnTopUrl);

  await fileIsExists(fileName)
    ? appendToFile(data)
    : createAndAppendToFile(data);
};

fetchBestStories();