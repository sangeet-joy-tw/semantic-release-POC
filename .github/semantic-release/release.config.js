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
         ]
    ]
}
module.exports = config;