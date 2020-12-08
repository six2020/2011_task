  const path = require('path');

  console.log('__dirname---->',__dirname);//返回当前文件的绝对目录

  console.log('__filename---->',__filename);//返回当前文件j加文件名的绝对目录

  console.log(path.dirname('/foo/bare/styd/query'));//返回当前/foo/bare/styd

  console.log(path.basename('/foo/bare/styd/query'));//得到query

  console.log(path.extname('aaaa/bbbb/cccc/dddd/index.html'));//得到.html
  /* {
    root: '/',
    dir: '/foo/bare/styd',
    base: 'query.txt',
    ext: '.txt',
    name: 'query'
  } */
  console.log(path.parse('/foo/bare/styd/query.txt'));//返回一个对象
  let pp = {
      root: '/',
      dir: '/foo/bare/styd',
      base: 'query.txt',
      ext: '.txt',
      name: 'query'
  }
  console.log("format==",path.format(pp));//format== /foo/bare/styd\query.txt

  console.log(path.relative('aaa','bbb','ccc'));//..\bbb

  console.log(path.resolve('/aaa','bar','bb/ffb','ccc','..'));//D:\aaa\bar\bb\ffb

  console.log(path.join('/foo','bar','/baz/asdf','qunx','..'));//\foo\bar\baz\asdf
