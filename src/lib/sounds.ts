
export interface Sound {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export const sounds: Sound[] = [
  {
    id: "rain",
    name: "Rain",
    url: "https://actions.google.com/sounds/v1/weather/rain_on_roof.ogg",
    icon: "cloud-rain",
  },
  {
    id: "forest",
    name: "Forest",
    url: "https://actions.google.com/sounds/v1/ambiences/forest_night.ogg",
    icon: "tree",
  },
  {
    id: "waves",
    name: "Ocean Waves",
    url: "https://actions.google.com/sounds/v1/water/waves_crashing_on_rock_beach.ogg",
    icon: "waves",
  },
  {
    id: "night",
    name: "Night Sounds",
    url: "https://actions.google.com/sounds/v1/ambiences/crickets_chirping.ogg",
    icon: "moon",
  },
];
