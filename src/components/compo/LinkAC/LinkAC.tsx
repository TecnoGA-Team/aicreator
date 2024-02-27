
import Link from 'next/link'
import React from 'react'

function LinkAC({text='',href,cn,children}:any) {
    return (
        <>
        <Link href={href} className={cn}>{text}{children}</Link>
        </>
    )
}

export default LinkAC