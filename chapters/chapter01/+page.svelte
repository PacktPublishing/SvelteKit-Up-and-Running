<script>
  let name = 'World';
</script>
<form>
  <label for="name" >What is your name?</label>
  <input type="text" name=”name” id=”name” bind:value={name} />
</form>
<h1>Hello, {name}!</h1>
