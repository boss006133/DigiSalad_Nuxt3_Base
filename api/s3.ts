import { fetch, EBaseType } from '@/api'
import type { IGlobel } from '@/models/api/global'
import type { IPage } from '@/models/api/page'

export default {
    global: fetch<IGlobel>({ baseType: EBaseType.S3, path: `global-page`, method: 'get' }),
    homepage: fetch<IPage>({ baseType: EBaseType.S3, path: `homepage`, method: 'get' }),
}
