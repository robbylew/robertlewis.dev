import { Feed } from 'feed'
import { config } from 'global-config'
import { posts as contentPosts } from '#content'

import { getSortedPosts } from '~/lib/get-sorted-posts'

import { markdownToHtml } from './markdown-to-html'

export function generateFeed() {
  const date = new Date()

  const posts = getSortedPosts(contentPosts).filter(
    post => post.status === 'published'
  )

  const feed = new Feed({
    title: 'Robert Lewis',
    description:
      'This is my "corner of internet", where I take some tests, document my studies and write about some subjects I like...',
    id: config.webserver.host,
    link: config.webserver.host,
    favicon: `${config.webserver.host}/assets/icon.png`,
    copyright: `All rights reserved ${date.getFullYear()}, Robert Lewis.`,
    updated: posts.length > 0 ? new Date(posts[0].date) : date,
    feedLinks: {
      rss2: `${config.webserver.host}/blog/feed`
    },
    docs: 'https://github.com/robbylew/robertlewis.dev',
    generator: 'Feed for Node.js',
    author: {
      name: 'Robert Lewis',
      email: 'contact@robertlewis.dev',
      link: 'https://robertlewis.dev'
    }
  })

  posts.forEach(async post => {
    const link = `${config.webserver.host}/blog/post/${post.slug}`

    feed.addItem({
      link,
      title: post.title,
      id: post.slug,
      description: post.description,
      content: markdownToHtml(`![](${link}/thumbnail) ${post.raw_content}`),
      author: [
        {
          name: 'Robert Lewis',
          email: 'contact@robertlewis.dev',
          link: 'https://www.robertlewis.dev'
        }
      ],
      date: new Date(post.date),
      category: post.tags.map(tag => ({ name: tag })),
      image: {
        url: `${link}/thumbnail`,
        type: 'image/png'
      }
    })
  })

  return feed.rss2()
}
