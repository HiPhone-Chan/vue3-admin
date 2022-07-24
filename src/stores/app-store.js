// import Cookies from 'js-cookie'
import { defineStore } from 'pinia';
import { getLanguage } from '@/i18n/index'

export const useAppStore = defineStore('app', {
  state: () => ({
    sidebar: {
      opened: localStorage.getItem('sidebarStatus') === '1',
      withoutAnimation: false
    },
    device: 'desktop',
    language: getLanguage(),
    size: localStorage.getItem('size') || 'medium'
  }),
  actions: {
    toggleSideBar() {
      this.sidebar.opened = !this.sidebar.opened
      this.sidebar.withoutAnimation = false
      if (this.sidebar.opened) {
        localStorage.setItem('sidebarStatus', '1')
      } else {
        localStorage.setItem('sidebarStatus', '0')
      }
    },
    closeSideBar(withoutAnimation) {
      localStorage.setItem('sidebarStatus', '0')
      this.sidebar.opened = false
      this.sidebar.withoutAnimation = withoutAnimation
    },
    toggleDevice(device) {
      this.device = device
    },
    setLanguage(language) {
      this.language = language
      // Cookies.set('language', language)
      localStorage.setItem('language', language)
    },
    setSize(size) {
      this.size = size
      // Cookies.set('size', size)
      localStorage.setItem('size', `${size}`)
    }
  }
})
