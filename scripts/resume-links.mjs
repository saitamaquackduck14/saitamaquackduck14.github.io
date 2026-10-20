function decodeEntities(value) {
  const named = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">" }
  return value.replace(/&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt);/gi, (_, entity) => {
    if (entity.startsWith("#")) {
      return String.fromCodePoint(entity[1].toLowerCase() === "x" ? parseInt(entity.slice(2), 16) : Number(entity.slice(1)))
    }
    return named[entity.toLowerCase()]
  })
}

function attributes(value) {
  return Object.fromEntries([...value.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, text]) => [key, text]))
}

// Poppler supplies the link text and coordinates from the compiled PDF itself.
export function extractResumeLinks(xml) {
  const pages = new Map()
  for (const [, pageAttributes, content] of xml.matchAll(/<page\b([^>]*)>([\s\S]*?)<\/page>/g)) {
    const page = attributes(pageAttributes)
    const pageLinks = []
    for (const [, textAttributes, href, body] of content.matchAll(/<text\b([^>]*)>\s*<a href="([^"]*)">([\s\S]*?)<\/a>\s*<\/text>/g)) {
      const box = attributes(textAttributes)
      const url = decodeEntities(href)
      if (!["https:", "http:", "mailto:", "tel:"].includes(new URL(url).protocol)) continue
      pageLinks.push({
        href: url,
        label: decodeEntities(body.replace(/<[^>]*>/g, "")).trim(),
        left: Number(box.left) / Number(page.width) * 100,
        top: Number(box.top) / Number(page.height) * 100,
        width: Number(box.width) / Number(page.width) * 100,
        height: Number(box.height) / Number(page.height) * 100,
      })
    }
    pages.set(Number(page.number), pageLinks)
  }
  if (!pages.size) throw new Error("The PDF link extractor did not find any pages.")
  return pages
}
