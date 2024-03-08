import { Metadata } from 'next'

import { AboutMe } from './sections/about-me'
import { Contact } from './sections/contact'

import './styles.css'

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Information about me, my social links and knowledge. I am a software engineer and I love to share my knowledge with others.',
  keywords: ['about', 'social', 'links', 'knowledge']
}

export const revalidate = 3600 // 1h

export default function Page() {
  return (
    <div className="content-container m-auto space-y-32">
      <AboutMe />
      <Contact />
    </div>
  )
}
