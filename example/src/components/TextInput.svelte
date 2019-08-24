<style>
  input {
    border: 0.0625rem solid var(--color-border);
    border-radius: 0.1875rem;
    padding: 0.25rem;
    font-size: 1rem;
    font-weight: 300;
    width: 100%;
    text-overflow: ellipsis;
  }
</style>

<script>
  export let placeholder;
  export let value;
</script>

<input {placeholder} on:focus bind:value type="text" />
