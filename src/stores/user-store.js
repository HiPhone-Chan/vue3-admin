import { defineStore } from 'pinia';
import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import { useTagsViewStore } from './tags-view-store'
import { usePermissionStore } from './permission-store'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    name: '',
    nickname: '',
    mobile: '',
    avatar: '',
    introduction: '',
    roles: []
  }),
  getters: {
  },
  actions: {
    // user login
    async login(userInfo) {
      const { username, password } = userInfo
      const response = await login({ username: username.trim(), password: password })
      const { data } = response
      this.token = data.id_token
    },

    // get user info
    async getInfo() {
      const response = await getInfo(this.token)
      const { data } = response

      if (!data) {
        reject('Verification failed, please Login again.')
      }

      data.roles = data.authorities
      const { roles, login, nickName, imageUrl, mobile, introduction } = data
      const name = login
      const avatar = imageUrl

      // roles must be a non-empty array
      if (!roles || roles.length <= 0) {
        reject('getInfo: roles must be a non-null array!')
      }

      this.roles = roles
      this.name = name
      this.nickname = nickName
      this.mobile = mobile
      this.avatar = avatar || 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
      this.introduction = introduction
      return data
    },

    // user logout
    async logout() {
      await logout(this.token)
      await this.resetToken()
      resetRouter()

      useTagsViewStore().delAllViews({ root: true })
    },

    // remove token
    async resetToken() {
      this.token = ''
      this.roles = []
      removeToken()
    },

    // dynamically modify permissions
    async changeRoles(role) {
      const { roles } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await usePermissionStore().generateRoutes(roles)
      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      // reset visited views and cached views
      useTagsViewStore().delAllViews({ root: true })
    }
  },
  persist: {
    token: {
      save(value) {
        setToken(value)
      },
      get() {
        return getToken()
      }
    }
  }
});
