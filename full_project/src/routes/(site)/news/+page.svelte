<script>
  export let data;
</script>
<h1>
  News
</h1>
<ul>
  {#each Object.entries(data.json) as [key, value]}
    <li>
      <a href='/news/{value.slug}'>{value.title}</a>
    </li>
  {/each}
</ul>
<style>
  * {
    font-family: sans-serif;
  }
  h1 {
    text-align: center;
  }
  ul {
    list-style: none;
    text-align: center;
    margin: 0;
    padding: 0;
  }
</style>
