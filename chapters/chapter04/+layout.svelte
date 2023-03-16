<script>
  import Nav from '$lib/Nav.svelte';
</script>
<div class='wrapper'>
  <div class='nav'>
    <Nav />
  </div>
  <div class='content'>
    <slot />
  </div>
  <div class='footer'>
    This is my footer
  </div>
</div>
<style>
  .wrapper {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  } 
  .footer {
    text-align: center;
    margin: 20px 0;
  }
</style>
