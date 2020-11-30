import _ from 'lodash';
import axios, { AxiosRequestConfig } from 'axios';
import join from 'url-join';

const baseUrl = process.env.API_URL || 'https://rickandmortyapi.com/api';

function get(path: string, params?: AxiosRequestConfig['params']) {
  return axios
    .get(join(baseUrl, path), { params })
    .then(_.property('data'));
}

export function fetchCharacter(id: string | number) {
  return get(`/character/${id}`);
}

export function fetchCharacters(params: Parameters<typeof get>[1]) {
  return get('/character', params);
}
