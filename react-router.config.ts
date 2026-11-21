import type { Config } from '@react-router/dev/config'
export default {
  ssr: true,
  prerender: ['/', '/about', '/docs', '/docs/video-calls'],
  routeDiscovery: { mode: 'initial' },
} satisfies Config
