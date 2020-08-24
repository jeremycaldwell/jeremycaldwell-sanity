const groq = require('groq')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')

const hasToken = !!client.config().token

function generateBasicpage (basicpage) {
  return {
    ...basicpage,
    body: BlocksToMarkdown(basicpage.body, { serializers, ...client.config() })
  }
}

async function getBasicpages () {
  const filter = groq`*[_type == "basicpage"]`
  const docs = await client.fetch(filter).catch(err => console.error(err))
  const basicpages = docs.map(generateBasicpage)
  const reducedBasicpages = overlayDrafts(hasToken, basicpages)
  return reducedBasicpages
}

module.exports = getBasicpages
