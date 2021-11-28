const stringify = data => JSON.stringify(data);
const parse = data => JSON.parse(data);

const merge = (first, second) => Array.from(new Set(first.concat(second)));

export { stringify, parse, merge };