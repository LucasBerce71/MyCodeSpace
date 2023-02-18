import { CodePreview } from '@/components/CodePreview'
import shiki from 'shiki'

export const metadata = {
  title: 'Dev Setup',
}

const markdown = `
# Dev Setup

- MacBook Air M2 (8gb Memory)
- LG 25" UltraWide Display
- Samsung 24" 144hz 1ms Display
- Logitech MX Verticals Mouse
- Logitech Pokeys Keyboard (Brown Switch)

That's it, nothing more.
`.trim()
 
export default async function DevSetup() {
  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon',
  })

  const code = highlighter.codeToHtml(markdown, { lang: 'md' })

  return <CodePreview code={code} />
}