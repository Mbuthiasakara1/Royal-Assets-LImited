import { useInView } from "react-intersection-observer";
import { useEffect, useState } from 'react'

function AnimatedNumber({ targetValue, suffix = '', duration = 2000 }) {
    const [count, setCount] = useState(0)
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    useEffect(() => {
        const totalUpdates = duration / 50
        const increment = targetValue / totalUpdates


        if (inView) {
            let startValue = 0
            const interval = setInterval(() => {
                startValue += increment
                if (startValue >= targetValue) {
                    setCount(targetValue)
                    clearInterval(interval)
                } else {
                    setCount(Math.ceil(startValue))
                }
            }, 50)
            return () => clearInterval(interval)
        }
        
    }, [inView, targetValue, duration])

    return (
        <div ref={ref}>
            <h1><span>{count}</span><span>{suffix}</span></h1>
        </div>
    )
}

export default AnimatedNumber;