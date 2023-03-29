<script>
  import { enhance } from '$app/forms';
  export let data;
  export let form;
</script>
{#if form?.msg}
  {form.msg}
{/if}
{#if data.user}
  <p>
    Welcome, {data.user.name}!
  </p>
{/if}

<form use:enhance method="POST" action="?/login">
  <label for="username">Username</label>
  <input name="username" id="username" type="text"/>
  <label for="password">Password</label>
  <input name="password" id="password" type="password"/>
  <button>Log In</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 25%;
    margin: 0 auto;
  }
  input {
    margin: .25em 1em 1em;
    display: block;
  }
  label {
    margin: 0 .5em;
  }
</style>
