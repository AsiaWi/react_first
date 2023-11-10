import React from 'react'

function MethodsAsPropsChild (props) {
  return (
    <div>
        { props.isloggedin ? (
          <div> 
            <p>Welsome to the site! Please complete the steps below:</p>
            <ol>
              <li>Confirm your email</li>
              <li>Complete your profile</li>
              <li>sSubscribe to the newsletter</li>
              <button onClick={props.handleSignOut}>Sign out</button>
            </ol>
          </div>
        ) : (
            <div>
          <p>Please sign in</p>
          <button onClick={props.handleSignIn}>Sign in</button>
         </div>
        )
        }
    </div>
  )
  
}

export default MethodsAsPropsChild