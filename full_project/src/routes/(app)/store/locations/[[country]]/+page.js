export function load({ params }) {
  const codes = [
    'na',
    'ca',
    'me',
    'us'
  ];
  const found = codes.filter(country_code => country_code === params.country);
  return {country: found[0] ?? 'na'};
}
