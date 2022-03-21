const result = temps
  .filter(v => !isNaN(+v))
  .reduce((obj, temp, idx) => {
    const colIdx = thresholds.findIndex(v => v > temp);
    obj[idx + 1] = {
      val: +temp,
      color: colors[colIdx > -1 ? colIdx : colors.length - 1],
      day: days[idx % days.length]
    };
    return obj;
  }, {});
