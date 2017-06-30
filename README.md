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