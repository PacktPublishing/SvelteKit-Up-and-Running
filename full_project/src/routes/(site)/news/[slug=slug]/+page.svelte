<script>
  export let data;
</script>
<h1>News</h1>

<h2>{data.title}</h2>
<div class='content'>
  {data.content}
</div>
<a href='/news'>&lt;&lt; Back to news</a>
<style>
  * {
    font-family: sans-serif;
  }
  h1, h2, .content {
    text-align: center;
  }
</style>
