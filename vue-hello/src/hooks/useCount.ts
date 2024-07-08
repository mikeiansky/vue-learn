import { ref } from "vue";


export default function useCount() {
    const count = ref(0)
    const incrementCount = () => {
        count.value++
    }

    return { count, incrementCount }
}