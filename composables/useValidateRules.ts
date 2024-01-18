import phone_country from '~/json/phone_country'
import { isInteger } from '@/utils/common'
export const useValidateRules = () => {
    const { t } = useI18n()
    //必填
    const required = (v) => {
        let msg = t('valisate-rules.required.default')
        return !!v || msg
    }

    //必填-業務類型
    const required_business = (v) => !!v || t('valisate-rules.required.business')
    //必填-姓名
    const required_name = (v) => !!v || t('valisate-rules.required.name')
    //必填-Email
    const required_email = (v) => !!v || t('valisate-rules.required.email')
    //必填-電話
    const required_phone = (v) => !!v || t('valisate-rules.required.phoneNo')
    //必填-主旨
    const required_subject = (v) => !!v || t('valisate-rules.required.subject')
    //必填-訊息
    const required_message = (v) => !!v || t('valisate-rules.required.message')

    // const required = (v, type) => {
    //     let msg = t('valisate-rules.required.default')
    //     if (type) msg = t(`valisate-rules.required['${type}']`)
    //     return !!v || msg
    // }
    //ex:多個checkbox必填 => 檢查array長度
    const required_array = (v) => v.length > 0 || t('valisate-rules.required.default')

    //手機
    const cellphone = (value, countryCode) => {
        const c_target = phone_country.filter((x) => x.InternationalCode === countryCode)
        const regex = c_target && c_target.length > 0 ? c_target[0].regex : null
        //const regex1 = /^09[0-9]{8}$/
        if (regex && regex.test(value)) return true
        else return t('valisate-rules.validate.phoneNo')
    }
    //電話
    const phone = (value) => {
        const regex1 = /^[0-9]{5,10}$/
        if (regex1.test(value)) return true
        else return '格式不符合'
    }
    //email
    const email = (value) => {
        const regex1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        if (regex1.test(value)) return true
        else return t('valisate-rules.validate.email')
    }
    //login account 登入帳號 -- 手機 | Email
    const loginAccount = (value) => {
        if (email(value) === true || isInteger(value) === true) return true
        else return '格式不符合'
    }
    //網址
    const url = (value) => {
        const regex =
            /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/

        if (regex.test(value)) return true
        else return '格式不符合'
    }
    //公司統編
    const companyId = (v) => {
        const regex = /^[0-9]{8}$/
        if (regex.test(v)) return true
        else return '格式不符合'
    }
    //手機載具條碼
    const invoiceDevice = (v) => {
        const regex = /^\/{1}[0-9A-Z]{7}$/
        if (regex.test(v)) return true
        else return '格式不符合'
    }
    //銀行帳號
    const bankAccount = (v) =>
        (v && isInteger(v) && v.length >= 10 && v.length <= 14) ||
        '請輸入本人帳號(10-14碼半形純數字)'
    //郵局帳號
    const bankAccountPostOffice = (v) =>
        (v && isInteger(v) && v.length === 14) || '請輸入本人帳號(共14碼半形純數字)'
    //純數字
    const numberOnly = (v) => !v || isInteger(v) || '請輸入數字'

    return {
        required,
        required_business,
        required_name,
        required_email,
        required_phone,
        required_subject,
        required_message,
        required_array,
        loginAccount,
        phone,
        cellphone,
        email,
        url,
        companyId,
        invoiceDevice,
        bankAccount,
        bankAccountPostOffice,
        numberOnly,
    }
}
