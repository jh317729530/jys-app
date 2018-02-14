import axios from '../api/common'
import { API_PATH } from '../config/env'

export const getByAdminUserId = (ajaxParame) => axios.post(API_PATH + '/user/getResource', ajaxParame)
