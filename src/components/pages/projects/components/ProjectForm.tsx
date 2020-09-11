import { FORM_ERROR } from 'final-form'
import React from 'react'

import Form from '@/components/Form'
import LabeledTextField from '@/components/LabeledTextField'

import { ProjectInput, ProjectInputType } from '../validations'

type ProjectFormProps = {
  submitText: string
  initialValues: Partial<ProjectInputType>
  onSubmit: (values: ProjectInputType) => Promise<void>
}

const ProjectForm = ({
  submitText,
  initialValues: { description, name, github, image, website },
  onSubmit,
}: ProjectFormProps) => {
  return (
    <Form<ProjectInputType>
      submitText={submitText}
      schema={ProjectInput}
      initialValues={{ description, name, github, image, website }}
      onSubmit={async (values) => {
        try {
          await onSubmit(values)
        } catch (error) {
          if (error.name === 'AuthenticationError') {
            return { [FORM_ERROR]: 'Sorry, those credentials are invalid' }
          } else {
            return {
              [FORM_ERROR]:
                'Sorry, we had an unexpected error. Please try again. - ' +
                error.toString(),
            }
          }
        }
      }}
    >
      <LabeledTextField name="name" label="Name" placeholder="Project name" />
      <LabeledTextField
        name="description"
        label="Description"
        placeholder="Describe the project"
      />
      <LabeledTextField
        name="github"
        label="Github link"
        placeholder="Enter project github link"
      />
      <LabeledTextField name="website" label="Website" placeholder="Website" />
      <LabeledTextField name="image" label="Image" placeholder="Image" />
    </Form>
  )
}

export default ProjectForm
