#!/usr/bin/env node

import { $, path } from 'zx'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
async function run() {
  const config = path.resolve(__dirname, '../sgconfig.yml')
  const sg = path.resolve(__dirname, '../node_modules/.bin/ast-grep')
  
  const cwd = process.cwd()
  console.log(`当前执行目录：${cwd}\n`);
  
  try {
    console.log('开始执行...');
    await $`${sg} scan -c ${config} -U --tracing 'summary'`
    console.log('执行完成！');
  } catch (error) {
    
  }
}

run()