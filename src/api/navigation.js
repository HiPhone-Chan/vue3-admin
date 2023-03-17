import request from '@/utils/request'

export function getNavigationTrees() {
  return request.get('/api/navigation/trees')
}
