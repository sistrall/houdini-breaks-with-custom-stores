<script lang="ts">
	import { graphql } from '$houdini';

	const store = graphql(`
		query Continents {
			continents {
				name
			}
		}
	`);
</script>

<h1>Continents</h1>

<ul>
	{#each $store.data?.continents || [] as continent}
		<li>{continent.name}</li>
	{/each}
</ul>
