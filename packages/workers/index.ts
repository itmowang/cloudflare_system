export default {
	fetch() {
		return new Response('Hello Mowang!', {
			headers: {
				'content-type': 'text/plain',
			},
		});
	},
};