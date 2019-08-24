<style>
  .container {
    display: grid;
    grid-template-columns: repeat(3, minmax(0px, 1fr));
    row-gap: 3rem;
    gap: 1.5rem;
    max-width: 75rem;
    margin: 0 auto;
    padding: 1rem;
  }
</style>

<script>
  import Listing from './Listing.svelte';
  export let listings;
</script>

<div class="container">
  {#each listings as listing}
    <Listing {listing} />
  {/each}
</div>
