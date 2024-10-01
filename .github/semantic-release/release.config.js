const config = {
    branches: ['main'],
    tagFormat: "${version}",
    Plugins: [
        '@semantic-release/commit-analyzer',
        ['@semantic-release/release-notes-generator', {
            "preset": "angular",
            "writerOpts": {
                "headerPartial": "#{{version}}\n",
                "footerPartial": "\n**Full Changelog**:https://github.com/XeroAPI/Xero-OpenAPI/compare/{{previousTag}}...{{version}}"
            }
        }],
        '@semantic-release/changelog',
        '@semantic-release/github',
        '@semantic-release/git',
    ]
}

module.exports = config