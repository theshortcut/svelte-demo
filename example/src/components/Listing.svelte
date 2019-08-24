<style>
  .container {
  }

  .logo {
    width: 100%;
  }

  .name {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: bold;
    color: var(--color-text);
  }

  .meta {
    display: flex;
    font-size: 0.75rem;
    color: #7c7c7c;
  }

  .meta > div + div::before {
    content: '•';
    padding: 0.25rem;
    color: #7c7c7c;
    font-weight: bold;
  }

  .star {
    color: var(--color-gold);
  }
</style>

<script>
  export let listing;
</script>

<div class="container">
  <img class="logo" alt={`${listing.name} Logo`} src={`${listing.avatar_image.original_url}?w=600&h=600&fit=crop`} />
  <div class="name">{listing.name}</div>
  <div class="meta">
    {#if listing.online_ordering.fee.amount}
      <div class="purchaseFee">${listing.online_ordering.fee.amount} Fee</div>
    {/if}
    {#if listing.online_ordering.purchase_min.amount}
      <div class="purchaseMin">${listing.online_ordering.purchase_min.amount} Minimum</div>
    {/if}
    {#if listing.reviews_count}
      <div class="rating">
        {listing.rating.toFixed(1)}
        <span class="star">★</span>
        ({listing.reviews_count})
      </div>
    {/if}
  </div>
</div>
