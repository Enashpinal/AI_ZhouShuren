addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const url = 'https://www.bilibili.com/v/popular/rank/all';

    try {
        // 获取 HTML 内容
        const response = await fetch(url);
        const html = await response.text();

        // 返回 JSON 格式
        return new Response(JSON.stringify({ html: html }), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response('Error fetching data: ' + error.message, { status: 500 });
    }
}
