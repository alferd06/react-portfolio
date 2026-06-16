// src/hooks/useReveal.js
import { useEffect, useRef } from 'react'

export function useReveal() {
    const ref = useRef(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active')
                    }
                })
            },
            { threshold: 0.1 }
        )

        observer.observe(element)

        return () => {
            observer.disconnect()
        }
    }, [])

    return ref
}