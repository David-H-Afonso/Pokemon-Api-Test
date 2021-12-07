export const colorPokemonType = (type) => {
  switch (type) {
    case "fairy": {
      return "#D65076";
    }
    case "dark": {
      return "#363945";
    }
    case "dragon": {
      return "#926AA6";
    }
    case "steel": {
      return "#939597";
    }
    case "ghost": {
      return "#6B5876";
    }
    case "bug": {
      return "#A0DAA9";
    }
    case "ice": {
      return "#0072B5";
    }
    case "psychic": {
      return "pink";
    }
    case "rock": {
      return "#B55A30";
    }
    case "ground": {
      return "#B89B72";
    }
    case "electric": {
      return "yellow";
    }
    case "poison": {
      return "purple";
    }
    case "fighting": {
      return "brown";
    }
    case "flying": {
      return "lightblue";
    }
    case "grass": {
      return "green";
    }
    case "water": {
      return "blue";
    }
    case "fire": {
      return "red";
    }
    case "normal": {
      return "white";
    }
    default: return "#f0f0c9"
  }
};
