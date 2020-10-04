interface importAllImages {
  keys: any;
}
const importAllImages = (r: importAllImages) => {
  const rKeys = r.keys().map((file: any) => {
    return file.match(/(.+?)(\.[^.]*$|$)/)[1].substring(2);
  });
  const rValues = r.keys().map(r);
  const result: { [key: string]: any } = {};
  rKeys.forEach((key: string, i: string) => (result[key] = rValues[i]));
  return result;
};

export default importAllImages;

// All icons in project, get by name in folder '/assets/icons', this return object.
export const icons = importAllImages(require.context('../assets/icons', false, /\.(png|jpg|svg)$/));
export const images = importAllImages(require.context('../assets/', false, /\.(png|jpg|svg)$/));
