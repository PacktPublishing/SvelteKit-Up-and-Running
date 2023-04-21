<script>
  export let data;
</script>
{#if data.notifications.count > 0}
  <ul>
  {#each data.notifications.items as item}
    <li>{item.content}</li>
  {/each}
  </ul>
{/if}
