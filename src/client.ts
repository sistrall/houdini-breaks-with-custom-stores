import { HoudiniClient, type RequestHandler } from '$houdini';

const requestHandler: RequestHandler = async ({
	fetch,
	text = '',
	variables = {},
	metadata
}) => {
	const url = 'https://countries.trevorblades.com/graphql';
	const result = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: text,
			variables
		})
	});
	return await result.json();
}

export default new HoudiniClient(requestHandler);
