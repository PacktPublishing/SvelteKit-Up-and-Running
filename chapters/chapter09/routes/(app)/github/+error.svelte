<script>
  import { page } from '$app/stores';
</script>

{$page.error.message}
{#if $page.error.id}
  <p>
    Error ID: {$page.error.id}
  </p>
{/if}
