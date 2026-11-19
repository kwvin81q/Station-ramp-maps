const types = {
  spot: 'Ramp spot diagram',
  surface: 'Airfield reference',
  planning: 'Cargo or planning map'
};
const search = document.querySelector('#search');
const kind = document.querySelector('#kind');
const container = document.querySelector('#stations');
const count = document.querySelector('#count');

function append(parent, tag, value, className = '') {
  const element = document.createElement(tag);
  element.textContent = value;
  element.className = className;
  parent.append(element);
  return element;
}

function link(parent, label, url, className) {
  const anchor = append(parent, 'a', label, className);
  anchor.href = url;
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
}

function render() {
  const query = search.value.trim().toLocaleLowerCase();
  const matches = stations.filter(([code, icao, city, type]) =>
    (kind.value === 'all' || type === kind.value) &&
    [code, icao, city].some(value => value.toLocaleLowerCase().includes(query))
  );
  count.textContent = `${matches.length} of ${stations.length} stations`;
  container.replaceChildren();
  if (!matches.length) append(container, 'p', 'No stations match your filters.');
  for (const [code, icao, city, type, source, url] of matches) {
    const card = append(container, 'article', '', 'card');
    append(card, 'span', `${code} / ${icao}`, 'code');
    append(card, 'h2', city);
    append(card, 'span', types[type], 'tag');
    append(card, 'p', source);
    const tower = append(card, 'details', '', 'tower');
    append(tower, 'summary', 'Tower frequencies (MHz)');
    const frequencies = append(tower, 'dl', '');
    for (const [frequency, assignment] of towerData[code]) {
      append(frequencies, 'dt', frequency);
      append(frequencies, 'dd', assignment);
    }
    link(tower, 'Published airport communications ↗', 'https://www.airnav.com/airport/' + icao);
    const links = append(card, 'div', '', 'links');
    link(links, 'Open ramp reference ↗', url, 'primary');
    const faa = new URL('https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dtpp/search/results/');
    faa.searchParams.set('ident', code);
    faa.searchParams.set('sort', 'type');
    link(links, 'Find FAA airport diagram ↗', faa.href);
  }
}

search.addEventListener('input', render);
kind.addEventListener('change', render);
render();
