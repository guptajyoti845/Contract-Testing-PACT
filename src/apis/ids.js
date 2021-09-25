import { getUrl } from './api.helpers';

export const getSchools = async ({ orgRefId }, token, config = {}) => {
  return getUrl(`/districts/${orgRefId}/schools`, {
    baseUrl: "https://ed-showcase-service.staging0.hmheng-content-pipeline.br.internal",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...config,
  });
};

export const getSchool = async ({ schoolId }, token, config = {}) => {
  return getUrl(`/schools/${schoolId}`, {
    baseUrl: "https://ed-showcase-service.staging0.hmheng-content-pipeline.br.internal",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...config,
  });
};
