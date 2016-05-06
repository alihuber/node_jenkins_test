# node_jenkins_test
Sample express.js app to be tested within a dockerized jenkins slave

1. Build image:  
`docker build -t nodetest .`
2. Build step script:  
`npm install`  
`node_modules/mocha/bin/mocha test/functional/hello.js`
