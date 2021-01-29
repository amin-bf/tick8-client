import { useEffect } from "react"
import { useRouter } from "next/router"

import useRequest from "../hooks/use-request"

const Signout = () => {
  const router = useRouter()
  const { doRequest } = useRequest({
    url: "/api/users/sign-out",
    method: "post",
    body: {},
    onSuccess: () => router.push("/")
  })
  useEffect(() => {
    doRequest()
  }, [])

  return <h5>Signing you out...</h5>
}

export default Signout
