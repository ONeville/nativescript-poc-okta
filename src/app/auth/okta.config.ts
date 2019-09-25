export const CONFIG = {
    url: "https://{YOUR_DOMAIN}",

    // Optional config
    issuer: "https://{YOUR_DOMAIN}/oauth2/default",
    clientId: "YOUR_CLIENT_ID",
    redirectUri: "http://localhost:4300",

    // Override the default authorize and userinfo URLs
    authorizeUrl: "https://{YOUR_DOMAIN}/oauth2/default/v1/authorize",
    userinfoUrl: "https://{YOUR_DOMAIN}/oauth2/default/v1/userinfo",
    pkce: true,
    // TokenManager config
    tokenManager: {
        storage: "sessionStorage"
    }
};
