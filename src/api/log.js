import request from '@/utils/request'

export function getOperationLogs(params) {
  return request.get('/api/admin/operation-logs', { params })
}

export function changeLevel({ name, level }) {
  return request.post(`/management/loggers/${name}`, { configuredLevel: level })
}

export function findAll(query) {
  return request.get('/management/loggers', { query })
}
