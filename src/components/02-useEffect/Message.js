import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setcoords] = useState({x:0 , y:0})
    const {x, y} = coords

    const mouseMove = (e)=>{
        const coors = {x:e.x, y:e.y}

        setcoords(coors)

}

    useEffect(() => {
        window.addEventListener('mousemove', mouseMove )

        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <>
            <h3>Y'all are amazing !!!</h3>
            <p>
                * x: {x}
                * y: {y}
            </p>
        </>
    )
}
