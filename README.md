React Labs
==========

this is an experimenting space for the react ecosystem

## TODO

- [x] refactor github fetching / caching logic inside container components in common functionality, this all works very similar.
- [ ] rewrite production server to support code splitting
- [ ] update server to support url segments with dots

## Starting Up

`npm install`

`npm run build`

`npm run start`  (webpack-dev-server)

`NODE_ENV=production npm start` (production server)

### References for Articles and Tutorials

- [React Tutorial](https://facebook.github.io/react/docs/tutorial.html)
- [State of the Art JavaScript in 2016](https://medium.com/javascript-and-opinions/state-of-the-art-javascript-in-2016-ab67fc68eb0b#.f8ck0vkik)
- [React Howto](https://github.com/petehunt/react-howto)
- [React/Redux Links](https://github.com/markerikson/react-redux-links)
- [React Components, Elements and Instances](https://medium.com/@dan_abramov/react-components-elements-and-instances-90800811f8ca#.npnuu2hts)
- [About React Koposer](https://voice.kadira.io/let-s-compose-some-react-containers-3b91b6d9b7c8#.eustx3sar)
- [React BEM](https://medium.com/@mistadikay/rebem-react-bem-20d875157017#.7daggsynh)
- [Removing Interface Complexity](http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome)
- [Testing in React: Getting Off The Ground](https://medium.com/javascript-inside/testing-in-react-getting-off-the-ground-5f569f3088a#.1mvol6prl)
- [Tape Testing](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4#.38yns5gbx)
- [Geeky Animations with SVG / React /D3](http://swizec.com/blog/animating-with-react-redux-and-d3/swizec/6775)
- [SurviveJS](https://leanpub.com/survivejs_webpack_react)
- [Securing React/Redux Apps with JWT](https://medium.com/@rajaraodv/securing-react-redux-apps-with-jwt-tokens-fcfe81356ea0#.47t0kle4w)
- [Introducing Le lab with “Monod”, our Markdown Editor](https://tailordev.fr/blog/2016/03/11/introducing-le-lab-with-monod-our-markdown-editor/)
- [Le Lab, Loading React Components Async](https://tailordev.fr/blog/2016/03/17/loading-dependencies-asynchronously-in-react-components/)
- [Full Stack React/Redux Tutorial](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)

*Egghead Videos*

- [Getting Started with Redux](https://egghead.io/series/getting-started-with-redux)
- [React Fundamentals](https://egghead.io/series/react-fundamentals) 
- [Introduction to Reactive Programming](https://egghead.io/series/introduction-to-reactive-programming)
- [Step-by-step Async JS with RxJS](https://egghead.io/series/step-by-step-async-javascript-with-rxjs)


### TODO

Set up Gulp: (i do not like to sass-loader and asset-loader with webpack)

- [ ] Gulp for static assets 
- [ ] Gulp: sass compilation, PostCSS / CSSNext
- [ ] Gulp-Webpack Integration

#### Libraries:
- [x] [react]()
- [x] [react-router](https://github.com/reactjs/react-router)
- [ ] [react-reselect](https://github.com/reactjs/reselect)
- [ ] [react-hyperscript](https://github.com/mlmorg/react-hyperscript) (no JSX)
- [ ] [react-hyperscript-helpers](https://www.npmjs.com/package/react-hyperscript-helpers)
- [ ] [redux](http://redux.js.org/) for application state and reducer
- [x] [axios](https://github.com/mzabriskie/axios) for async requests
- [ ] [rxjs]()

#### Testing

- [ ] [mocha], with [webpack/mocha-loader](https://github.com/webpack/mocha-loader)
- [ ] [ava](https://github.com/sindresorhus/ava)
- [ ] [tape](https://github.com/substack/tape)

#### UI
- [ ] [react-material-ui](http://www.material-ui.com/#/get-started/prerequisites)
