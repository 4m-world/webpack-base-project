import App from './App';

describe('App', () => {
	test('return a sample text', () => {
		expect(App()).toEqual('A Startup webpack JS project');
	});
});
