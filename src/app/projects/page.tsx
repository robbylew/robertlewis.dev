import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { projects } from '#content'

import { Title } from '~/components/title'

import { ProjectCard } from './_components/project-card'
import { ProjectInfo } from './_components/project-info'

export default function Page() {
  const featuredProjects = projects
    .filter(project => project.featured)
    .sort((a, b) => a.priority - b.priority)
  const otherProjectsWithImage = projects
    .filter(project => !project.featured && project.image)
    .sort((a, b) => Number(a.priority) - Number(b.priority))
  const otherProjectsWithoutImage = projects
    .filter(project => !project.featured && !project.image)
    .sort((a, b) => Number(a.priority) - Number(b.priority))

  return (
    <div className="content-container m-auto space-y-8">
      <Title text="Projects" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {featuredProjects.length > 0 &&
          featuredProjects.map(project => (
            <ProjectCard data={project} key={project.slug} />
          ))}
        {otherProjectsWithImage.length > 0 &&
          otherProjectsWithImage.map(project => (
            <ProjectCard data={project} key={project.slug} />
          ))}
      </div>
      <div className="space-y-6">
        {otherProjectsWithoutImage.length > 0 &&
          otherProjectsWithoutImage.map(project => (
            <ProjectInfo data={project} key={project.slug} />
          ))}
      </div>
    </div>
  )
}
