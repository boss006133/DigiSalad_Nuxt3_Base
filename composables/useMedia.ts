import { screensMedia } from "@/vender/tailwindcss/screens"

export const useMedia = () => {
    const screensObj = screensMedia;
    const mediaQuerys = reactive({}) as any;
    Object.entries(screensObj).forEach(([key, value]) => {
        mediaQuerys[key] = useMediaQuery(`(${value.type}-width: ${value.value})`);
    });

    const mediaNums = reactive({}) as any;
    Object.entries(screensObj).forEach(([key, value]) => {
        mediaNums[key] = Number(value.value.split('px')[0]);
    });

    return {
        ...toRefs(mediaQuerys), list: mediaNums
    };
}