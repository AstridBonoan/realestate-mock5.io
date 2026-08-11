import fs from 'fs'

const files = [
  'src/data/properties.js',
  'src/data/content.js',
  'src/components/Hero.jsx',
  'src/pages/Home.jsx',
  'src/pages/Membership.jsx',
  'src/pages/About.jsx',
]

const urls = new Set()
for (const f of files) {
  const t = fs.readFileSync(f, 'utf8')
  for (const m of t.matchAll(/https:\/\/images\.unsplash\.com\/[^\s"'\\]+/g)) {
    urls.add(m[0])
  }
}

let ok = 0
let bad = 0
for (const url of urls) {
  const res = await fetch(url, {
    headers: { Accept: 'image/*', 'User-Agent': 'Mozilla/5.0' },
  })
  const type = res.headers.get('content-type') || ''
  const good = res.ok && type.startsWith('image')
  if (good) {
    ok++
    console.log('OK', url)
  } else {
    bad++
    console.log('FAIL', res.status, url)
  }
}
console.log(`RESULT ok=${ok} bad=${bad} total=${urls.size}`)
