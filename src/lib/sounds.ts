
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
    url: "https://cdn.pixabay.com/download/audio/2022/03/10/audio_2555a6e880.mp3",
    icon: "cloud-rain",
  },
  {
    id: "forest",
    name: "Forest",
    url: "https://cdn.pixabay.com/download/audio/2021/10/18/audio_1ad2a48830.mp3",
    icon: "tree",
  },
  {
    id: "waves",
    name: "Ocean Waves",
    url: "https://cdn.pixabay.com/download/audio/2022/03/10/audio_c8b0a6c26c.mp3",
    icon: "waves",
  },
  {
    id: "night",
    name: "Night Sounds",
    url: "https://cdn.pixabay.com/download/audio/2021/08/09/audio_753146a8d3.mp3",
    icon: "moon",
  },
];
