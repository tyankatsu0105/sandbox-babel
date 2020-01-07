import plugin from '../plugin';
import pluginTester from 'babel-plugin-tester';
import path from 'path';

pluginTester({
  plugin,
  title: 'basic test',
  fixtures: path.resolve(__dirname, '__fixtures__'),
});