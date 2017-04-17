- https://www.openstreetmap.org/

# Data

- https://overpass-turbo.eu/

```
[out:json];
node(around:500, 53.68582, 23.83156)[amenity=cafe];
out;
```

```
[out:json];
area[name="Гродно"][boundary]->.city;
(
  node(area.city)[amenity=cafe];
  (way(area.city)[amenity=cafe]; >;);
  (rel(area.city)[amenity=cafe]; >;);
);
out;
```

# Routing

- https://github.com/Project-OSRM/osrm-backend/wiki/Running-OSRM
- https://github.com/Project-OSRM/osrm-backend/blob/master/profiles/car.lua
