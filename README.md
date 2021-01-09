Clonse this repo with:
```
git clone https://github.com/dirkjf/php-hmr
```


Install packages:
```
yarn install
```

Run the dev server:
```
yarn start
```


By default, Webpack will proxy to ` localhost:8000` (your development address) from `localhost:3003` (the 'asset address'). You can change these addresses in __webpack.config.dev.js__. Running a local PHP server with the build-in PHP web server at this address can be done with:

```
php -S localhost:8000
```