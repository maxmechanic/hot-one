/// <reference types="node" />

import * as path from 'path';
import * as fs from 'fs';
import * as turf from '@turf/turf';
import {Polygon, FeatureCollection} from 'geojson';

const data: FeatureCollection<Polygon> = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/oceans.json'), {encoding: 'utf-8'}));

export function justLikeTheOcean(lat: number, long: number): boolean {
  const oceanPolygons: Polygon[] = data.features.map((feature) => feature.geometry);
  return oceanPolygons.some((polygon) => turf.inside([lat, long], polygon));
}