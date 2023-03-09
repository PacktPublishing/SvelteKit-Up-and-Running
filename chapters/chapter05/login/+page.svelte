<script>
  export let data;
</script>
{#if data.user}
  <p>
    Welcome, {data.user.name}!
  </p>
{/if}
