import React, { memo } from 'react'
//memoriza el componente y solo lo ejecuta cuando solo las properties cambian, de lo contrario no se ejecuta este codigo
export const Small = memo(({value}) => {

    console.log('me volvieron a llamar')
    return (
        <small>
            {value}
        </small>
    )
})
