<script lang="ts">
	import { graphql } from '$houdini';

	const store = graphql(`
		query Countries {
			countries {
				name
			}
		}
	`);
</script>

<h1>Countries</h1>

<ul>
	{#each $store.data?.countries || [] as country}
		<li>{country.name}</li>
	{/each}
</ul>
