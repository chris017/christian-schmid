import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { markdownSchema } from "sanity-plugin-markdown";

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: '5efb9ya7',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), markdownSchema()],

  schema: {
    types: schemaTypes,
  },
})
