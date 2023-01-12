/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	apiUrl: 'https://countries.trevorblades.com/graphql',
	plugins: {
		'houdini-svelte': {
			customStores: {
				query: '$lib/stores.CustomQueryStore'
			}
		}
	}
};

export default config;
