import moment from 'moment'
import { Alert } from 'react-native'
import Session from '@engine/Session'
import { i18n } from '@I18N/i18n.js'
import { printLog } from '@engine/Util'
import Config from './Config'
import { getHeaders, API_GIFT } from '../constants/setting';

const timeoutSeconds = 20
const baseUrl = Config.getApiEndpoint()
const tenantId = Config.getTenantId()

export default function request(
  method,
  Payload,
  url,
  token,
) {
  switch (method) {
    case 'GET':
      const { token, _id } = payload;
      let response = await fetch(`${API_BASE}${url}`, {
        method: 'GET',
        headers: getHeaders(token),
      })
      let responseJson = await response.json()
      return responseJson
    case 'POST':
      const { token, params } = payload;
      const response = await fetch(`${API_BASE}${url}`, {
        method: 'POST',
        headers: getHeaders(token),
        body: JSON.stringify(params)
      });
      const responseJson = await response.json();
      return responseJson;
    case 'DELETE':
    default:
      break;
  }
}

export const get = (path, shouldShowLoading, showAlert, url = baseUrl) => request('GET')
export const post = (path, body, shouldShowLoading, showAlert, url = baseUrl) => request('POST')