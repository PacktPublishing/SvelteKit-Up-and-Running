<script>
  export let form;
</script>
<div class='wrap'>
  {#if form && form.status === true}
    <p>{form.msg}</p>
  {/if}
  <form method='POST'>
    <label>
      Comment
      <input name="comment" type="text">
    </label>
    <button>Submit</button>
  </form>
</div>
<style>
  .wrap {
    width: 50%;
    margin: 0 auto;
    text-align: center;
  }
  p {
    color: green;
  }
  label {
    display: block;
    margin: 1rem;
  }
</style>
