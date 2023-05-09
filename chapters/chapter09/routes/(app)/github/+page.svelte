<script>
  import { enhance } from '$app/forms';
  import { invalidate } from '$app/navigation';
  
  export let data;
  export let form;

  const reload = () => {
    invalidate('https://api.github.com/repos/');
  };

</script>

{#if form && form.message }
  {form.status}
  {form.message}
{/if}

<p>
  Stargazers on the official SvelteKit repo: {data.repo.stargazers_count}
</p>

<form method='POST' use:enhance>
  <button formaction='?/star' on:click={reload}>Star</button>
  <button formaction='?/unstar' on:click={reload}>Unstar</button>
</form>
