/**
 * Todo.
 *
 * @description Todo.
 */

export const releaseBody = (pkg) => {
    return `# ${pkg.data.extra.productName} (v${pkg.data.version})

${pkg.data.description}

[More info](${pkg.data.repository.url})

- 📝 [CHANGELOG](${pkg.data.extra.changelogUrl})
- 📜 [LICENSE](${pkg.data.extra.licenseUrl})

- 🔍 [SAFARI REQUIREMENTS](${pkg.data.repository.url}/blob/${pkg.data.version}/docs/safari-unsigned-info.md)
`
}