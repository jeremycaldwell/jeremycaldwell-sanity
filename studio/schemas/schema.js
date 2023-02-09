// document schemas
import author from './documents/author'
import category from './documents/category'
import post from './documents/post'
import basicpage from './documents/basicpage'
import weeknote from './documents/weeknote'
import project from './documents/project'
import siteSettings from './documents/siteSettings'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'

export default [
  post,
  author,
  category,
  siteSettings,
  project,
  weeknote,
  basicpage,
  authorReference,
  mainImage,
  excerptPortableText,
  bioPortableText,
  bodyPortableText
]
