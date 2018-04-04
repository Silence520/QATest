// var expect=require('chai').expect;

// describe.skip('异步测试',function(done) {
// 	it('测试应该在4000 后 执行',function(){
// 		var x=true;

// 		var f=function(){
// 			x=false;
// 			expect(x).to.be.not.ok;
			
// 		}
// 	  setTimeout(f,40000)
// 	  console.log('testing...')
// 	})
// })

// istanbul cover –hook-run-in-content node_modules/mocha/bin/_mocha 
//mocha --compilers coffee:coffee-script/register
// mocha --compilers js:babel-core/register


// istanbul cover node_modules/mocha/bin/_mocha
// istanbul cover node_modules/mocha/bin/_mocha  --compilers js:babel-core/register
// node_modules/.bin/babel-node node_modules/.bin/babel-istanbul cover node_modules/.bin/_mocha -- test/pad.spec.js

// node_modules/.bin/babel-istanbul cover node_modules/.bin/_mocha -- test/pad.spec.js