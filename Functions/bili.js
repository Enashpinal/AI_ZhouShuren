async function fetchHTML(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('网络请求失败');
    }

    const text = await response.text();
    return text;
}

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const seedURL = 'https://www.bilibili.com/v/popular/rank/all';
    
    try {
        const htmlContent = await fetchHTML(seedURL);

        // 这里可以将 HTML 内容直接放入 JSON 对象中
        const jsonResponse = {
            source: "哔哩哔哩排行榜",
            html: htmlContent
        };

        return new Response(JSON.stringify(jsonResponse), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response('请求失败: ' + error.message, { status: 500 });
    }
}
