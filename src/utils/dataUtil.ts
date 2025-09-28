export const chunkArray = <T>(arr: T[], size: number): T[][] => {
  const chunkedArr: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size));
  }
  return chunkedArr;
};

export const splitArrayInHalf = <T>(arr: T[]): [T[], T[]] => {
  const midpoint = Math.ceil(arr.length / 2);

  const firstHalf = arr.slice(0, midpoint);

  const secondHalf = arr.slice(midpoint);

  return [firstHalf, secondHalf];
};
