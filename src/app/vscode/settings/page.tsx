import { GistContent } from '@/components/GistContent'

export const metadata = {
  title: 'VSCode Settings',
}

export default async function Settings() {
  {/* @ts-expect-error Server Component */}
  return <GistContent gistUrl="https://gist.githubusercontent.com/LucasBerce71/9f4fe9057952e21dfab062f8c34eb2f8/raw/9d93bdb659be3ee64964616c3ef911905af84d0e/settings.json" />
}