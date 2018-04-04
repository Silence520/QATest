var today=require('../data');
var expect=require('chai').expect;


describe('today 函数的测试',function() {
	it('今天是2018-01-05',function() {
		expect(today()).to.be.equal('2018-01-05');
	});

});

