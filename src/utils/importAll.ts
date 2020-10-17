const importAllImages = (res: any) => {
  const rKeys = res.keys().map((file: string) => {
    if (file) {
      const filename = JSON.parse(JSON.stringify(file));
      return filename.match(/(.+?)(\.[^.]*$|$)/)[1].substring(2);
    } else {
      return false;
    }
  });
  const rValues = res.keys().map(res);
  const result: { [key: string]: string } = {};
  rKeys.forEach((key: string, i: string) => (result[key] = rValues[i]));
  return result;
};

export const icons = importAllImages(
  require.context('../assets/icons', false, /\.(png|jpg|svg|jpeg|gif)$/)
);
export const images = importAllImages(
  require.context('../assets/', false, /\.(png|jpg|svg|jpeg|gif)$/)
);
export const background = importAllImages(
  require.context('../assets/backgrounds', false, /\.(png|jpg|svg|jpeg|gif)$/)
);
