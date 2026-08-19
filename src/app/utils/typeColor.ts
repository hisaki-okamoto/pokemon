export function typeColor(type: string): string {
  if (type === "くさ") {
    return "#00dd00";
  } else if (type === "ほのお") {
    return "#ff0000";
  } else if (type === "みず") {
    return "#00c0ff";
  } else if (type === "でんき") {
    return "#d0d00a";
  } else if (type === "じめん") {
    return "#b38900";
  } else if (type === "いわ") {
    return "#968c7e";
  } else if (type === "こおり") {
    return "#a0d0d0";
  } else if (type === "かくとう") {
    return "#ffa000";
  } else if (type === "どく") {
    return "#803080";
  } else if (type === "ひこう") {
    return "#00dddd";
  } else if (type === "エスパー") {
    return "#ff7070";
  } else if (type === "むし") {
    return "#40a040";
  } else if (type === "ゴースト") {
    return "#604060";
  } else if (type === "ドラゴン") {
    return "#5030ff";
  } else if (type === "あく") {
    return "#555555";
  } else if (type === "はがね") {
    return "#aaaaaa";
  } else if (type === "フェアリー") {
    return "#ffaaf0";
  } else {
    return "#bbbbbb";
  }
}
