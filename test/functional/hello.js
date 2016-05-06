// force the test environment to 'test'
process.env.NODE_ENV = 'test';
// get the application server module
var app = require('../../index');
var http = require('http');

const Browser = require('zombie');
Browser.localhost('localhost', 3001);

describe('index page', function() {
  const browser = new Browser();

  before(function(done) {
    this.server = http.createServer(app).listen(3001);
    browser.visit('/', done);
  });


  it('should contain a greeting', function() {
    browser.assert.success();
    browser.assert.text('body', 'Hello from Docker!');
  });

  after(function(done) {
    this.server.close(done);
  });
});
