import Clipboard from 'clipboard'
import { useEventStore } from '@/stores/event-store'

function clipboardSuccess() {
  useEventStore().setNotification({
    message: 'Copy successfully',
    type: 'success',
    duration: 1500
  })
}

function clipboardError() {
  useEventStore().setNotification({
    message: 'Copy failed',
    type: 'error'
  })
}

export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  })
  clipboard.on('success', () => {
    clipboardSuccess()
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError()
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
