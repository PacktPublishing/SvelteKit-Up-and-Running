<script>
import Nav from '$lib/Nav.svelte';
import Notify from '$lib/Notify.svelte';

export let data;
</script>
<div class='wrapper'>
  <div class='nav'>
    <div class='menu'>
      <Nav />
    </div>
    <div class='notifications'>
      <Notify count={data.notifications.count}/>
    </div>
  </div>
  <div class='content'>
    <slot></slot>
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
  .nav {
    text-align: center;
  }
  .menu {
    display: inline-block;
  }
  .notifications {
    float: right;
  }
  .footer {
    text-align: center;
    margin: 20px 0;
  }
</style>
