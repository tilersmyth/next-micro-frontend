import { AppContext } from "@/contexts/app-context"
import { useContext } from "react"


export const useApp = () => {
    return useContext(AppContext)
}
