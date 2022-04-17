<script lang="ts">
	import { MetaTags, MetaTagsProps } from 'svelte-meta-tags';
	import { page } from '$app/stores';

	let seo: MetaTagsProps | undefined;

	page.subscribe((val) => {
		seo = val.stuff.seo;
	});
</script>

<MetaTags
	title={seo?.title ?? 'swindi'}
	description={seo?.description ?? 'Svelte Kit starter template with WindiCSS setup'}
	canonical="https://swindi.sznm.dev"
	openGraph={seo?.openGraph ?? {
		url: 'https://swindi.sznm.dev',
		title: 'Svelte Kit + WindiCSS',
		description: 'Svelte Kit starter template with WindiCSS setup',
		site_name: 'swindi'
	}}
	twitter={seo?.twitter ?? {
		handle: '@sozonome',
		site: 'https://sznm.dev',
		cardType: 'summary_large_image'
	}}
/>
