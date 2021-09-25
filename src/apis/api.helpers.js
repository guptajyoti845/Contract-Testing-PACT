// eslint-disable-next-line import/prefer-default-export
export const getUrl = (url, config = {}) => {
  const requestUrl = `${config.baseUrl || ''}${url}`;

  return fetch(requestUrl, {
    method: 'GET',
    ...config,
  });
};
