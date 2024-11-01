import {PropsWithChildren} from 'react'

export default function layout({children}: PropsWithChildren) {
  return (
    <>
        <h2 className='text-3xl'>DASHBOARD</h2>
        <div>{children}</div>
    </>
  )
}
