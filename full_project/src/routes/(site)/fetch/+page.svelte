<script>
  export let data;
</script>
<h1>Picture of the Day</h1>
<h2>{data.pic.title}</h2>
<div class='wrap'>
  <a href={data.pic.hdurl}><img src={data.pic.url} alt={data.pic.title}></a>
</div>
<p>{data.pic.explanation}</p>

<style>
  h1, h2 {
    text-align: center;
  }
  .wrap {
    max-width: 75%;
    margin: 0 auto;
    text-align: center;
  }
  img {
    max-width: 100%;
  }
</style>
