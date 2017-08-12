# hot-one

Utility functions for detecting hot ones, and distance from the midday sun. Temperatures are normalized around the hottest day recorded in Central Park in New York City. (106º F)

## Installation

```
npm install --save hot-one
```

## Usage

### `isHotOne(temperature: number, scale: TemperatureScale = 'F'): boolean`
For a given temperature, calculate whether it is a hot one.

### `inchesFromMiddaySun(temperature: number, scale: TemperatureScale = 'F'): number`
Translate a given temperature to inches from the midday sun.

### `justLikeTheOceanUnderTheMoon(latitude: number, longitude: number): boolean`
Determines whether a given latitude and longitude is:

1. "Just like the ocean". This is determined via lookup in the public domain [Natural Earth](http://www.naturalearthdata.com/) dataset.
2. "Under the moon." This is determined by using [suncalc](https://github.com/mourner/suncalc) to determine whether the moon is currently risen at the given latitude and longitude, and whether the moon is at least, like, a third visible.