/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            hostname: 'avatars.githubusercontent.com'
        },{
            hostname: 'github.com'
        },{
            hostname: 'img.shields.io'
        },{
            hostname: 'github-readme-stats.vercel.app'
        }, {
            hostname: 'cdn.seeklearning.com.au'
        }],
        dangerouslyAllowSVG: true,
    }
}

module.exports = nextConfig
