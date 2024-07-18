const formatZeroNumber = (data: number) => {
  return data < 10 ? "0" + data : data;
};

const formatNumberToTimer = (time: number) => {
  return (
    formatZeroNumber(Math.floor(time / 60)) + ":" + formatZeroNumber(time % 60)
  );
};

export { formatNumberToTimer };
