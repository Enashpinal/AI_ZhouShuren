export async function onRequest(context) {
    const { request } = context;

    if (request.method === 'GET') {
        const length = parseInt(new URL(request.url).searchParams.get('length')) || 12;
        const password = generateRandomPassword(length);
        return new Response(JSON.stringify({ password }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }

    return new Response('Method Not Allowed', { status: 405 });
}

function generateRandomPassword(length) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}
