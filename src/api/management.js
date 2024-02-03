import request from '@/utils/request';

export function checkHealth() {
  return request.get('/management/health');
}

export function loadConfiguration() {
  return request.get('/management/configprops');
}

export function loadEnvConfiguration() {
  return request.get('/management/env');
}

export function getMetrics() {
  return request.get('/management/sysmetrics');
}

export function retrieveThreadDump() {
  return request.get('/management/threaddump');
}

export function getOpenApiGroups() {
  return request.get('/management/sysopenapigroups');
}
