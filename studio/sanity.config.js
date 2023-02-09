// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import {codeInput} from '@sanity/code-input'
import schemas from './schemas/schema'

export default defineConfig({
  title: "jeremycaldwell.me - Sanity",
  projectId: "0v2r2wqt",
  dataset: "production",
  plugins: [
    deskTool(),
    codeInput()
  ],
  schema: {
    types: schemas,
  },
});


// {
//   "root": true,
//   "project": {
//     "name": ""
//   },
//   "api": {
//     "projectId": "",
//     "dataset": ""
//   },
//   "plugins": [
//     "@sanity/components",
//     "@sanity/dashboard",
//     "dashboard-widget-structure-menu",
//     "dashboard-widget-document-list",
//     "dashboard-widget-netlify",
//     "@sanity/vision",
//     "media",
//     "@sanity/code-input",
//   ],
//   "parts": [
//     {
//       "name": "part:@sanity/base/schema",
//       "path": "./schemas/schema.js"
//     },
//     {
//       "name": "part:@sanity/desk-tool/structure",
//       "path": "./deskStructure.js"
//     },
//     {
//       "implements": "part:@sanity/dashboard/config",
//       "path": "dashboardConfig.js"
//     }
//   ]
// }
