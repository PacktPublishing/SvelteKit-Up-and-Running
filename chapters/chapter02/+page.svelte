<script>
	import db from 'db';
	import url from 'img/demo.png';
	let status = db.connection;
</script>
<p>{status}</p>
<img src={url} alt='demo'>
