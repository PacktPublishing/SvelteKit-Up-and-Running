<script>
  export let data;
</script>
<h4>Product page</h4>
{#if data.details}
  <p class='red'>{data.details}</p>
{:else}
  <p>No product selected! Try clicking one or adding your own URL.
{/if}

<style>
  .red {
    color: red;
    font-weight: bold;
  }
</style>
