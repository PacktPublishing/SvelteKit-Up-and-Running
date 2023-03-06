<script>
import { invalidateAll } from '$app/navigation';
export let count = 0;

</script>
<a href='/notifications' on:click={() => invalidateAll()}>
  {count}
</a>
<style>
  a {
    padding: 15px;
    color: white;
    text-decoration: none;
    background-color: #ea6262;
  }
</style>
