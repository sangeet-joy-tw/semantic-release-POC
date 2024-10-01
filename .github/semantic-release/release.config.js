const config = {
    branches: ['main'],
    tagFormat: "${version}",
    plugins: [
        ['@semantic-release/release-notes-generator',
            {
                preset: 'angular',
                writerOpts: {
                  headerPartial: '# {{version}}\n',
                  footerPartial: '\n**Full Changelog**:https://github.com/XeroAPI/Xero-OpenAPI/compare/{{previousTag}}...{{version}}'
                }
            }
         ],
         '@semantic-release/commit-analyzer',
         '@semantic-release/github',
         '@semantic-release/git',

    ]
}
module.exports = config;