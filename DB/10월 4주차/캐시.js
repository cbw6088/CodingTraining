function solution(cacheSize, cities) {
  let cache = [];
  let totalTime = 0;

  if (cacheSize === 0) {
    return cities.length * 5;
  }

  cities.forEach((city) => {
    const loweredCities = city.toLowerCase();

    const idx = cache.indexOf(loweredCities);

    if (idx !== -1) {
      cache.splice(idx, 1);
      totalTime += 1;
    } else {
      totalTime += 5;

      if (cache.length === cacheSize) {
        cache.shift();
      }
    }
    cache.push(loweredCities);
  });
  return totalTime;
}
