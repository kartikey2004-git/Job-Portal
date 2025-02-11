/* eslint-disable react/prop-types */
import { useUser } from "@clerk/clerk-react"
import { Navigate, useLocation } from "react-router-dom"


const ProtectedRoute = ({children}) => {
  // The useUser() hook provides access to the current user's User object, which contains all the data for a single user in your application and provides methods to manage their account. This hook also allows you to check if the user is signed in and if Clerk has loaded and initialized.

  const {isSignedIn,isLoaded,user} = useUser()
  const {pathname} = useLocation()

  if(isLoaded && !isSignedIn && isSignedIn!==undefined){
    return <Navigate to='/?sign-in=true'/>
  }

  // checking onboarding status where we suppose to go user is candiate or recruiter 

  if(user!== undefined && !user.unsafeMetadata?.role && pathname!== "/onboarding") return <Navigate to="/onboarding"/>

  return children
}

export default ProtectedRoute