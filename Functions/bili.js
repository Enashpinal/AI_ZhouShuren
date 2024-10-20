addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const min = parseInt(url.searchParams.get('min')) || 0
  const max = parseInt(url.searchParams.get('max')) || 100

  if (min >= max) {
    return new Response(JSON.stringify({ error: 'Invalid range' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min

  return new Response(JSON.stringify({ randomNumber: randomNum }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
