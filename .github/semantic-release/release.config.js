const config = {
    branches: ['main', "release-notes-custom"],
    Plugins: [
        '@semantic-release/commit-analyzer',
        ['@semantic-release/release-notes-generator', {
            "preset": "angular",
            "writerOpts": {
                "headerPartial": "#{{version}}\n",
                "footerPartial": "\n###Changelog\n{{hash}}"
            }
        }],
        '@semantic-release/changelog',
        '@semantic-release/github',
        [
            '@semantic-release/git',
            {
                "assests": ["CHANGELOG.md"],
                "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
            }
        ],
        ["@semantic-release/npm", {
            "npmPublish": false,
        }]
    ]
}

module.exports = config