<script>
  import { page } from '$app/stores';
</script>

<h1>News</h1>
<h2>{$page.status}</h2>
<div class='content'>
  {$page.error.message}
</div>
<style>
  * {
    font-family: sans-serif;
  }
  h1, h2, .content {
    text-align: center;
    color: #358eaa;
  }
</style>
