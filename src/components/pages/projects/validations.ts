import * as z from 'zod'

export const ProjectInput = z.object({
  name: z.string(),
  description: z.string().nullable(),
  image: z.string().url().nullable(),
  github: z.string().url().nullable(),
  website: z.string().url().nullable(),
})
export type ProjectInputType = z.infer<typeof ProjectInput>
