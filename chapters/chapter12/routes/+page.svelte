<script>
  import db from 'db';
  import url from 'img/demo.svg';
  let status = db.connection;
  let name = 'World';
</script>
<svelte:head>
  <title>Home</title>
</svelte:head>
<form>
  <label for="name" >What is your name?</label>
  <input type="text" class='name' bind:value={name} />
</form>
<h1>Hello, {name}!</h1>
<p>{status}</p>
<img src={url} alt='demo'>

