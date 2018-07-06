const themes = [
  {
    name: 'GradeGray',
    firstTime: true,
    colorPrimary: '#4ea9da',
    gradientColor: 'linear-gradient(to left,#bdc3c7,#2c3e50)',
    colorHighlight: '#A7A6A7',
    textPrimary: '#202121',
    navAlpha: 'rgba(250, 250, 250, 0.75)'
  },
  {
    name: 'PiggyPink',
    firstTime: true,
    colorPrimary: '#3dc0b0',
    gradientColor: 'linear-gradient(to left,#ee9ca7,#ffdde1)',
    colorHighlight: '#F8DCF8',
    textPrimary: '#DB5391',
    navAlpha: 'rgba(250, 250, 250, 0.75)'
  },
  {
    name: 'CoolBlues',
    colorPrimary: '#FAFAFA',
    gradientColor: 'linear-gradient(to left,#2193b0,#6dd5ed)',
    colorHighlight: '#B3CEDA',
    textPrimary: '#FAFAFA',
    navAlpha: 'rgba(78, 169, 218, 0.75)'
  },
  {
    name: 'MegaTron',
    colorPrimary: '#FAFAFA',
    gradientColor: 'linear-gradient(to left,#C6FFDD,#FBD786,#f7797d)',
    colorHighlight: '#C6FFDD',
    textPrimary: '#f7797d',
    navAlpha: 'rgba(61, 192, 176, 0.75)'
  },
  {
    name: 'CoolSky',
    colorPrimary: '#A26836',
    gradientColor: 'linear-gradient(to left,#2980B9,#6DD5FA,#FFFFFF)',
    colorHighlight: '#77BEC5',
    textPrimary: '#3063A0',
    navAlpha: 'rgba(250, 250, 250, 0.75)'
  },
  {
    name: 'Palewood',
    colorPrimary: '#e64f52',
    gradientColor: 'linear-gradient(to left,#eacda3,#d6ae7b)',
    colorHighlight: '#FFEFE2',
    textPrimary: '#CA752E',
    navAlpha: 'rgba(250, 250, 250, 0.75)'
  },
  {
    name: 'Azur-lane',
    colorPrimary: '#af3d4e',
    gradientColor: 'linear-gradient(to left,#7F7FD5,#86A8E7,#91EAE4)',
    colorHighlight: '#91EAE4',
    textPrimary: '#4B136A',
    navAlpha: 'rgba(250, 250, 250, 0.75)'
  },
  {
    name: 'Metapolis',
    colorPrimary: '#FFFFFF',
    gradientColor: 'linear-gradient(to left,#659999,#f4791f)',
    colorHighlight: '#F1AD65',
    textPrimary: '#FFFFFF',
    navAlpha: 'rgba(137, 48, 61, 0.75)'
  },
  {
    name: 'ultaViolet',
    colorPrimary: '#FFFFFF',
    gradientColor: 'linear-gradient(to left,#654ea3,#eaafc8)',
    colorHighlight: '#eaafc8',
    textPrimary: '#FFFFFF',
    navAlpha: 'rgba(72, 85, 100, 0.75)'
  },
  {
    name: 'GreenAndBlue',
    colorPrimary: '#00BCD4',
    gradientColor: 'linear-gradient(to left,#c2e59c,#64b3f4)',
    colorHighlight: '#B3CEDA',
    textPrimary: '#2A4687',
    navAlpha: 'rgba(255, 255, 255, 0.75)'
  },
  {
    name: 'summerDog',
    colorPrimary: '#845c4e',
    gradientColor: 'linear-gradient(to left,#a8ff78,#78ffd6)',
    colorHighlight: '#A9EB7B',
    textPrimary: '#0A510A',
    navAlpha: 'rgba(255, 255, 255, 0.75)'
  },
  {
    name: 'VelvetSun',
    firstTime: true,
    colorPrimary: '#607D8B',
    gradientColor: 'linear-gradient(to left,#f05053,#e1eec3)',
    colorHighlight: '#EDD3B9',
    textPrimary: '#f05053',
    navAlpha: 'rgba(255, 255, 255, 0.75)'
  },
  {
    name: 'oceanView',
    colorPrimary: '#FFFFFF',
    gradientColor: 'linear-gradient(to left,#a8c0ff,#3f2b96)',
    colorHighlight: '#a8c0ff',
    textPrimary: '#FAFAFA',
    navAlpha: 'rgba(69, 90, 100, 0.75)'
  }
];

 const getThemes = () => {
  return themes.map((theme) => {
    return {
      name: theme.name,
      firstTime: theme.firstTime,
      colorPrimary: theme.colorPrimary,
      gradientColor: theme.gradientColor,
      colorHighlight: theme.colorHighlight,
      bgPrimary: theme.gradientColor,
      bgAlternate: theme.colorPrimary,
      bgLanding: theme.colorPrimary,
      textPrimary: theme.textPrimary,
      textAlternate: theme.gradientColor,
      textLanding: theme.colorPrimary,
      parallaxStars: theme.colorPrimary,
      navAlpha: theme.navAlpha
    };
  });
};

export { getThemes };