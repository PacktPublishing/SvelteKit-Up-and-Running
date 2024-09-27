const key = "DEMO_KEY"; // your API key here

export async function load() {
  const pic = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${key}`,
  ).then((response) => {
    console.log("got response");
    return response.json();
  });
  return { pic };
}
