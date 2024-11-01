import {PropsWithChildren} from 'react'

export default function layout({children}: PropsWithChildren) {
  return (
    <>
      <h1 className="text-3xl">ROOT</h1>
      <div>{children}</div>
    </>
  )
}
