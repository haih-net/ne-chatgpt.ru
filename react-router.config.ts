import type { Config } from '@react-router/dev/config'
export default {
  ssr: true,
  prerender: ['/', '/about'],
  routeDiscovery: { mode: 'initial' },
} satisfies Config
