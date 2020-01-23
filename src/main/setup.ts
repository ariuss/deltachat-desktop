import { getLogger } from '../shared/logger'

/**
 * Only works when it's installed (aka when its a dev enviroment)
 */
export async function tryInstallReactDevTools() {
    const log = getLogger('main/dev')
    try {
        const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer')
        try {
            const name = await installExtension(REACT_DEVELOPER_TOOLS)
            log.debug(`Added Extension:  ${name}`)
        } catch (err) {
            log.debug('An error occurred: ', err)
        }
    } catch (error) {
        log.debug('react devtools aren\'t loaded (this is normal when using a production version of dc)')
    }
}


