<script context="module">
  import qs from 'qs';

  async function loadListings(address, fetch) {
    const { latitude, longitude } = address.attributes;
    const params = qs.stringify({
      filter: { location: 'deliverable' },
      latlng: `${latitude},${longitude}`,
      sort_by: 'position',
      limit: 100,
    });
    const listingsResponse = await fetch(`https://api-g.weedmaps.com/discovery/v1/listings?${params}`);
    const {
      data: { listings },
    } = await listingsResponse.json();
    return listings;
  }

  export async function preload() {
    // check if we have a stored address in cookies
    const addressCookieResponse = await this.fetch('index.json', { credentials: 'include' });
    const address = await addressCookieResponse.json();

    if (!address) return { address: null, listings: [] };

    // we do so load listings based on that address
    const listings = await loadListings(address, this.fetch);
    return { address, listings };
  }
</script>

<script>
  import Search from '../components/Search.svelte';
  import Hero from '../components/Hero.svelte';
  import Listings from '../components/Listings.svelte';

  export let address;
  export let listings;

  async function onAddressSelect({ detail: newAddress }) {
    document.cookie = `_wm_delivery_address=${JSON.stringify(newAddress)}`;
    address = newAddress;
    listings = await loadListings(newAddress, window.fetch);
  }
</script>

<svelte:head>
  <title>Weedmaps</title>
</svelte:head>

<Hero>
  <Search on:addressSelect={onAddressSelect} placeholder={address && address.attributes && address.attributes.name} />
</Hero>

<Listings {listings} />
