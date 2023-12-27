/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            hostname: 'avatars.githubusercontent.com'
        },{
            hostname: 'github.com'
        }]
    }
}

module.exports = nextConfig
