export const useSchemaProperty = () => {
    const { t } = useI18n()

    return {
        logo: '/image/DS-Club-square-logo.png',
        telephone: '+852 3103 2588',
        businessEmail: 'hi@digisalad.cool',
        careerEmail: 'jobs@digisalad.cool',
        address: {
            addressRegion: 'HK',
            addressCountry: 'HK',
            postalCode: '0000',
            streetAddress: t('contact-us.info.office.address'),
        },
        openingHoursSpecification: [
            {
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00',
            },
        ],
    }
}
