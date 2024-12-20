import { defineBoot } from '#q-app/wrappers'
import { nextTick } from 'vue'
import { useErrorLogStore } from '@/stores/error-log-store'
import { isString, isArray } from '@/utils/validate'
import settings from '@/settings'
const { errorLog: needErrorLog } = settings

function checkNeed() {
  const env = process.env.NODE_ENV
  if (isString(needErrorLog)) {
    return env === needErrorLog
  }
  if (isArray(needErrorLog)) {
    return needErrorLog.includes(env)
  }
  return false
}
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default defineBoot(async ({ app }) => {
  if (checkNeed()) {
    app.config.errorHandler = async function (err, vm, info) {
      await nextTick()
      useErrorLogStore().addErrorLog({
        err,
        vm,
        info,
        url: window?.location?.href,
      })
      console.error(err, info)
    }
  }
})
