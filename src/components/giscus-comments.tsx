'use client'

import Giscus, { Theme, GiscusProps, Mapping } from '@giscus/react'
import { useAbsoluteTheme } from '~/hooks/useAbsoluteTheme'

type Props = Omit<GiscusProps, 'repo' | 'repoId' | 'mapping' | 'theme'> & {
  mapping?: Mapping
  transparentDark?: boolean
}
export function GiscusComments({
  category = 'Post Show and tell',
  categoryId = 'DIC_kwDOLcykxs4Cdx49',
  reactionsEnabled = '1',
  inputPosition = 'bottom',
  mapping = 'og:title',
  ...rest
}: Props) {
  const prefersColorScheme = useAbsoluteTheme()

  console.log('Current theme:', prefersColorScheme) // Add this line

  const theme: { [key: string]: Theme } = {
    dark: 'https://mateusf.com/assets/giscus_dark.css',
    light: 'https://mateusf.com/assets/giscus_light.css'
  }

  return (
    <Giscus
      repo="robbylew/robertlewis.dev"
      repoId="MDQ6VXNlcjgyMjQ2NjEw"
      mapping={mapping}
      emitMetadata="0"
      lang="en"
      category={category}
      categoryId={categoryId}
      reactionsEnabled={reactionsEnabled}
      inputPosition={inputPosition}
      theme={theme[prefersColorScheme]}
      {...rest}
    />
  )
}
