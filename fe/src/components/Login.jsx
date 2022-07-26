import React from 'react'

export default function Login() {
  return (
    <React.Fragment>
        <div className="w-full flex justify-center items-center">
            <form action="submit" className="flex flex-col justify-center items-center w-[300px] bg-black" onSubmit={(event)=>{

            }}>
                <p>Username/email</p>
                <input type="text" />
            </form>
        </div>
    </React.Fragment>
  )
}
