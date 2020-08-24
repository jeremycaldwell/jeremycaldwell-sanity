const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generateWeeknote (weeknote) {
  return {
    ...weeknote,
    body: BlocksToMarkdown(weeknote.body, { serializers, ...client.config() }),
    work: BlocksToMarkdown(weeknote.work, { serializers, ...client.config() }),
    personal: BlocksToMarkdown(weeknote.personal, { serializers, ...client.config() })
  }
}

async function getWeeknotes () {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  const filter = groq`*[_type == "weeknote" && defined(slug) && publishedAt < now()]`
  const projection = groq`{
    _id,
    publishedAt,
    title,
    slug,
    body,
    personal,
    work
  }`
  const order = `| order(publishedAt asc)`
  const query = [filter, projection, order].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const prepareWeeknotes = reducedDocs.map(generateWeeknote)
  return prepareWeeknotes
}

module.exports = getWeeknotes
