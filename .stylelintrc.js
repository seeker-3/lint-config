const { readFileSync } = require('fs');

const filePath = __dirname + '/.stylelintrc.json';
const modulesPath = __dirname + '/node_modules/'

const settings = JSON.parse(readFileSync(filePath));

settings.extends = settings.extends.map(name => modulesPath + name);
settings.plugins = settings.plugins.map(name => modulesPath + name);

module.exports = settings;
