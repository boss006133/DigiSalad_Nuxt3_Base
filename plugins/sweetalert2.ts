import Swal from 'sweetalert2'

export default defineNuxtPlugin((nuxtApp) => {
    const Toast = Swal.mixin({
        customClass: {
            container: 'ds_toast2',
        },
        toast: true,
        position: 'bottom',
        showConfirmButton: false,
        timer: 3000,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
    })
    return {
        provide: {
            Toast,
        },
    }
})
