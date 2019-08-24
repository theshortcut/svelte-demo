<style>
  .container {
    background: var(--color-text);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  h1,
  h2 {
    color: var(--color-bg);
    text-align: center;
    margin: 0;
  }

  h1 {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: lighter;
    margin-bottom: 1rem;
  }
</style>

<div class="container">
  <h1>Get It Delivered</h1>
  <h2>Browse the best marijuana products available for delivery to you.</h2>
  <slot />
</div>
