import { CodePreview } from '@/components/CodePreview'
import shiki from 'shiki'

export const metadata = {
  title: 'Gaming Setup',
}

const markdown = `
# Gaming Setup

- Xbox Series S (500GB)

`.trim()
 
export default async function GamingSetup() {
  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon',
  })

  const code = highlighter.codeToHtml(markdown, { lang: 'md' })

  return <CodePreview code={code} />
}
