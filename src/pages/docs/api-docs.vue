<template>
  <div id="swagger-ui" ref="swagger-ui"></div>
</template>

<script>
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from 'swagger-ui-dist'
import 'swagger-ui-dist/swagger-ui.css'
import { getOpenApiGroups } from '@/api/management'
import { useUserStore } from '@/stores/user-store'

export default {
  name: 'ApiDocs',
  data() {
    return {
      baseUrl: 'v3/api-docs',
      ui: null,
    }
  },
  async mounted() {
    const serverBaseUri = `${process.env.VUE_APP_API_BASE}/${this.baseUrl}`

    let urls
    const { data } = await getOpenApiGroups()
    if (Array.isArray(data)) {
      urls = data.map(({ group, description }) => ({ name: description, url: `${serverBaseUri}/${group}` }))
    } else {
      urls = [{ name: 'default', url: serverBaseUri }]
    }

    this.ui = SwaggerUIBundle({
      urls: urls,
      url: this.baseUrl,
      dom_id: '#swagger-ui',
      deepLinking: true,
      filter: true,
      layout: 'StandaloneLayout',
      withCredentials: true,
      presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
      plugins: [SwaggerUIBundle.plugins.DownloadUrl, this.alwaysEnableTryItOutPlugin],
      tryItOutEnabled: true,
      requestInterceptor: function (req) {
        req.headers['Authorization'] ??= 'Bearer ' + useUserStore().token
        // Remove the sample Swagger UI request body if present
        if (
          req.method === 'GET' &&
          req.body === '{"additionalProp1":"string","additionalProp2":"string","additionalProp3":"string"}'
        ) {
          req.body = undefined
        }
        return req
      },
    })
  },
  methods: {
    alwaysEnableTryItOutPlugin() {
      return {
        components: {
          TryItOutButton: () => null,
        },
      }
    },
  },
}
</script>

<style></style>
