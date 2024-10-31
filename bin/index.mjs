#!/usr/bin/env node

import { $, path } from 'zx'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
async function run() {
  const sg = path.resolve(__dirname, '../node_modules/.bin/ast-grep')
  const getConfig = (type) => path.resolve(__dirname, `../${type}-sgconfig.yml`)
  
  const cwd = process.cwd()
  console.log(`当前执行目录：${cwd}\n`);
  
  try {
    console.log('开始对 prop break change 进行代码重写...');
    await $`${sg} scan -c ${getConfig('prop')} -U --tracing 'summary'`
    console.log('prop break change 代码重写执行完成！\n');

    console.log('ant-design-vue4 移除了 style 样式导入，开始检测...');
    await $`${sg} scan -c ${getConfig('import-style')}`
    console.log('style 样式导入代码检测完成！');
  } catch (error) {
    
  }
}

run()