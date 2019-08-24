<style>
  form {
    width: 50%;
    position: relative;
  }

  .results {
    display: flex;
    position: absolute;
    background: var(--color-bg);
    flex-direction: column;
    left: 0;
    right: 0;
    border-radius: 0.25rem;
    box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.3);
    margin-top: 0.125rem;
  }

  .result {
    border: none;
    font-size: 1rem;
    background: transparent;
    padding: 0.25rem;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
  }
</style>

<script>
  import qs from 'qs';
  import { createEventDispatcher, onMount } from 'svelte';
  import TextInput from './TextInput.svelte';

  const dispatch = createEventDispatcher();

  export let placeholder = 'Search';
  let query = '';
  let searchResults = Promise.resolve([]);
  let isOpen = false;
  let formNode;

  function clickOutside(evt) {
    if (isOpen && formNode && !formNode.contains(evt.target)) {
      isOpen = false;
      searchResults = Promise.resolve([]);
    }
  }

  onMount(() => {
    window.addEventListener('click', clickOutside);
  });

  function handleSubmit() {
    if (query.length < 2) return;
    const url = 'https://api-g.weedmaps.com/wm/v1/geocode';
    const params = qs.stringify({
      types: 'address,poi',
      query,
    });
    searchResults = fetch(`${url}?${params}`)
      .then(res => res.json())
      .then(({ data }) => data);
  }

  function onFocus() {
    isOpen = true;
  }

  function onSelect(result) {
    query = '';
    isOpen = false;
    searchResults = Promise.resolve([]);
    dispatch('addressSelect', result);
  }
</script>

<form on:submit|preventDefault={handleSubmit} bind:this={formNode}>
  <TextInput {placeholder} on:focus={onFocus} bind:value={query} />

  {#if isOpen}
    <div class="results">
      {#await searchResults}
        <p>loading...</p>
      {:then results}
        {#each results as result}
          <button class="result" on:click={() => onSelect(result)}>{result.attributes.name}</button>
        {/each}
      {:catch error}
        <p>Something went wrong: {error.message}</p>
      {/await}
    </div>
  {/if}
</form>
