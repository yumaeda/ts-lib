# Install npm on CentOS 7
Execute the following commands.

```
sudo yum install epel-release
sudo yum install nodejs
npm install --save-dev browserify
npm install --save-dev babelify@next @babel/core
npm install --save-dev concat
npm install --save-dev @babel/preset-env
```

# Build JS
Execute the following commands.

```
npm run concat
npm run build
```
