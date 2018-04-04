var add=require('../calc').add;
var expect=require('chai').expect;
//skip  only
describe('加法测试',function() {

	// before(function(){
	// 	console.log('before')
	// })
	// beforeEach(function(){
	// 	console.log('beforeEach')
	
	// })
	// after(function(){
	// 	console.log('after')
	// })
	// afterEach(function(){
	// 	console.log('afterEach')
	// })

	it('0 + 0 = 0',function() {
		expect(add(0,0)).to.be.equal(0);
	});
	it('0 + 5= 5',function() {
		expect(add(0,5)).to.be.equal(5);
	});
});


