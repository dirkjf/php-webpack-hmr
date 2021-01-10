# PHP with Webpack Hot Module Replacement (HMR)

This is an example of integration of Webpack with HRM in a PHP application. 
It supports both regular JS and React. 

## Installation

Clone this repository:
```
git clone https://github.com/dirkjf/php-webpack-hmr
```

Install packages:
```
yarn install
```

## Usage

Start a local webserver:
```
php -S localhost:8000
```

Start the webpack development server:
```
yarn start
```

For production build files instead, run:
```
yarn build 
```

In your browser go to `http://localhost:8000` to see the results. 

## Configuration

The Webpack development server will proxy to ` localhost:8000` (your development address) from `localhost:3003` (the address from which assets are server). 
You can change these addresses in __webpack.config.dev.js__.


