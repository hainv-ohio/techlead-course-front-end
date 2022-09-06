const nextSettings = {
    optimizeFonts: false,
    //crossOrigin: "anonymous",
    env: {
        storeApiUrl : process.env.STORE_API_ENDPOINT,
        title: "MyMedi",
        titleDescription: "React Ecomerce template with RESTFul API",
    },
    eslint: {
        // Warning: Dangerously allow production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};

module.exports = nextSettings;
