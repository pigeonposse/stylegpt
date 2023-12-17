/**
 * SAFARI BUILD CMD
 * 
 * @description This script builds a Safari app extension from a Chrome extension
 * @see https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_web_extension_for_safari/
 * @see https://www.npmjs.com/package/appdmg
 */


import { pkg, joinPath, writeSync, exec, zipFile, readJSON, formatString } from '../core/main.js'
import { collectiveLinks, repoLinks } from '../templates/readme.js';

const buildDmg = async (type, options) =>{

    const { CHROME_PATH, SAFARI_PATH, ID, COMPANY, PRODUCT_NAME } = options;

    if (type !== 'iOS' && type !== 'macOS') {
        throw Error('Type incorrect. Must be "iOS" or "macOS".')
    }
    
    const compressPath      = joinPath( pkg.dir, 'dist', 'comp' )
    const manChromePath = joinPath(CHROME_PATH, 'manifest.json')
    const getVersion = async () => {
        const d = await readJSON(manChromePath)
        return d.version
    }

    const CURR_PATH = joinPath('.dev','safari-build')
    const APPDMG_JSON = joinPath(CURR_PATH,'appdmg.json')
    const EXT_README_PATH = joinPath('docs','safari-unsigned-info.md')
    const EXT_README_ABSOLUTE_PATH = joinPath(pkg.dir,EXT_README_PATH)
    const VERSION = await getVersion()
    const SAFARI_ID = pkg.data.extra.download.safari.id
    const BUNDLE_ID = `com.${COMPANY}.${ID}`
    const SAFARI_XCODEPROJECT_PATH = `${SAFARI_PATH}/${PRODUCT_NAME}/${PRODUCT_NAME}.xcodeproj`;
    const SAFARI_APP_BUILD_PATH = `${SAFARI_PATH}/app-${type}`;
    const SAFARI_APP_BUILD_RELEASE_PATH = `${SAFARI_APP_BUILD_PATH}/Build/Products/Release/${PRODUCT_NAME}.app`;
    const SAFARI_APP_ICNS_PATH = `${SAFARI_APP_BUILD_RELEASE_PATH}/Contents/Resources/AppIcon.icns`;
    const SAFARI_DMG_NAME = type === 'macOS' ? `${SAFARI_ID}-${ID}-${VERSION}.dmg` : `${SAFARI_ID}-${type.toLowerCase()}-${ID}-${VERSION}.dmg`
    const SAFARI_DMG_OUTPUT = `${SAFARI_PATH}/${SAFARI_DMG_NAME}`;

    
    console.group('🚀Convert chrome to safari extension');
    await exec(`xcrun safari-web-extension-converter ${CHROME_PATH} \
        --project-location "${SAFARI_PATH}" \
        --app-name "${PRODUCT_NAME}" \
        --bundle-identifier ${BUNDLE_ID} \
        --force \
        --no-prompt \
        --no-open
    `)

    console.groupEnd()

    // Build Safari project
    console.group('🚀 Build safari app');
    await exec(`xcodebuild -project "${SAFARI_XCODEPROJECT_PATH}" \
        -scheme "${PRODUCT_NAME} (${type})" \
        -configuration Release \
        -derivedDataPath "${SAFARI_APP_BUILD_PATH}"`
    );
    console.groupEnd()

    // Create DMG
    console.group('🚀 Create DMG');
    
    writeSync(EXT_README_PATH, infoData(options, type))
    writeSync(APPDMG_JSON, JSON.stringify({
        "title": PRODUCT_NAME,
        "icon": SAFARI_APP_ICNS_PATH,
        // "background": "test-background.png",
        "contents": [
            { 
                "x": 448, 
                "y": 344, 
                "type": "link", 
                "path": "/Applications" 
            },
            { 
                "x": 192,
                "y": 344, 
                "type": "file", 
                "path": SAFARI_APP_BUILD_RELEASE_PATH,
            },
            { 
                "x": 192,
                "y": 172, 
                "type": "file", 
                "path": EXT_README_ABSOLUTE_PATH,
            }
        ]
    }, null, 2))

    await exec(`pnpm appdmg ${APPDMG_JSON} ${SAFARI_DMG_OUTPUT}`)
    writeSync(APPDMG_JSON, JSON.stringify({}, null, 2))

    console.groupEnd()
    console.group('🚀 Create ZIP');

        await zipFile(
            SAFARI_DMG_OUTPUT, 
            joinPath(compressPath, SAFARI_DMG_NAME.replace('.dmg','.zip')), 
            SAFARI_DMG_NAME
        )

    console.groupEnd()
}

const infoData = (options, type) => {
    const {PRODUCT_NAME} = options
    return `# ${PRODUCT_NAME} (Unsigned ${type} version)

${pkg.data.description}

## 🛠️ Steps to activate the extension

1. Move app to "/Applications" folder
2. Allow Unsigned Extensions in Safari App. How:

    1. Open Safari and choose Safari > Settings.
    2. Select the Advanced tab, then select the "Show Develop menu in menu bar" checkbox.
    3. Choose Develop > Allow Unsigned Extensions, enter your password, and click OK. If you are using Safari 17 or later, click the Developer tab in Safari Settings, and select the "Allow unsigned extensions" option. The Allow Unsigned Extensions setting resets when a user quits Safari, so you need to set it again the next time you launch Safari.
    4. Choose Safari > Settings and click the Extensions tab. This tab shows the localized description, display name, and version number for the selected Safari app extension. It also provides a more nuanced message about the permissions for the extension.
    5. Find your new extension in the list on the left, and enable it by selecting its checkbox.
    6. Close Safari Settings.

[More info](https://developer.apple.com/documentation/safariservices/safari_app_extensions/building_a_safari_app_extension#2957925)

## 🔗 Project Links

${repoLinks(pkg)}

## 🐦 Collective Links

${collectiveLinks(pkg)}
`

}

export const buildSafari = async (type = "all", options = {}) => {
    try {
        
        const optionsDefault = {
            CHROME_PATH: joinPath( pkg.dir, 'dist', 'chrome' ),
            SAFARI_PATH: joinPath( pkg.dir, 'dist', 'safari' ),
            ID: formatString(pkg.data.name),
            PRODUCT_NAME: pkg.data.extra.productName+" (Safari Extension)",
            COMPANY: formatString(pkg.data.extra.collective.id),
        };
        
        options = {...optionsDefault, ...options}
        
        await exec( `rimraf ${optionsDefault.SAFARI_PATH}` )

        if(type == 'all'){
            await buildDmg('iOS', options)
            await buildDmg('macOS', options)
        }else {
            await buildDmg(type, options)
        }

    } catch (error) {
        throw Error(error)
    }
}
