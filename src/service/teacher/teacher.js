import axios from '../../api/common'

// 教师列表
export const teacherList = (ajaxParams) => axios.post('/api/teacher/list', ajaxParams)
