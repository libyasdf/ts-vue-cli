[文档所在地址](https://libyasdf.github.io/ts-vue-cli/)  

# ts-vue-cli

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 合并不相关提交
```
fatal: refusing to merge unrelated histories
（拒绝合并不相关的历史）
```
出现这个问题的最主要原因还是在于本地仓库和远程仓库实际上是独立的两个仓库。直接clone的方式在本地建立起远程github仓库的克隆本地仓库就不会有这问题
```
git pull origin master --allow-unrelated-histories //该选项可以合并两个独立启动仓库的历史
```

```
git push --set-upstream origin master
```