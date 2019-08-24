<style>
  nav {
    box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
  }

  ul {
    margin: 0;
    padding: 0 1rem;
    display: flex;
    flex: 1;
    max-width: 75rem;
  }

  li {
    display: flex;
    align-items: center;
  }

  .home {
    background: url('wm-logo-black-smile.svg') no-repeat center;
    text-indent: calc(100% + 7rem);
    overflow: hidden;
    white-space: nowrap;
    width: 7rem;
    height: 1.6875rem;
  }

  .selected {
    position: relative;
  }

  .selected::after {
    position: absolute;
    content: '';
    width: calc(100% - 1rem);
    height: 0.125rem;
    background-color: var(--color-accent);
    display: block;
    bottom: 0;
  }

  a {
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.5rem 0.5rem;
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    color: var(--color-text);
  }
</style>

<script>
  export let segment;
</script>

<nav>
  <ul>
    <li>
      <a class="home" href=".">home</a>
    </li>
    <li>
      <a class={!segment || segment === 'deliveries' ? 'selected' : ''} href=".">Deliveries</a>
    </li>
  </ul>
</nav>
