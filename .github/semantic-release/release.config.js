const config = {
    branches: ['main', "release-notes-custom"],
    Plugins: [
        '@semantic-release/commit-analyzer',
        ['@semantic-release/release-notes-generator', {
            "preset": "angular",
            "writerOpts": {
                "headerPartial": "#{{version}}\n",
                "footerPartial": "\n###Changelog - {{hash}}"
            }
        }],
        '@semantic-release/changelog',
        '@semantic-release/github',
        '@semantic-release/git'
    ]
}

module.exports = config