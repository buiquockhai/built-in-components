import type { Preview } from '@storybook/react'
import '../src/styles/global.css'
import '../src/styles/collapse.css'
import '../src/styles/flowing.css'
import '../src/styles/vars.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
