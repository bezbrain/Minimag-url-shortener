export const limitOriginalUrl = (url: string) => {
  const sliceUrl = `${url.slice(0, 100)}`;
  return sliceUrl;
};
