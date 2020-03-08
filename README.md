<p align="center">
  <img width="100" src="https://raw.githubusercontent.com/msintaha/latte/master/src/assets/images/latte.png">
</p>

# Latte
A React boilerplate pluggable to any backend

### Setup
- Node version ~11
- Install yarn using `npm i -g yarn`
- Install packages using `yarn install`
- Run the app using `yarn start`

### Deploying
- In webpack.prod.js, replace the `<YOUR_FRONTEND_CLIENT>` with the actual domain path
- Run `yarn build`
- Run `yarn production` to serve the app in your domain

### Project Structure

```
.
├── package.json
├── public
│   └── index.html
├── src
│   ├── App.jsx
│   ├── app.scss
│   ├── assets
│   │   └── images
│   │       └── latte.png
│   ├── components
│   │   └── Header
│   │       └── index.jsx
│   ├── config.js
│   ├── index.jsx
│   ├── pages
│   │   ├── Home
│   │   │   ├── Home.spec.js
│   │   │   ├── _index.scss
│   │   │   └── index.jsx
│   │   └── _index.scss
│   ├── services
│   │   └── Service.js
│   ├── test
│   │   ├── dom.js
│   │   └── helper.js
│   └── utils
│       └── http.js
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
└── yarn.lock
```

# License
This project is licensed under the MIT license.

If you have any questions or comments, please create an issue.
