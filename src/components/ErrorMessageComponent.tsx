// import { X } from "lucide-react"

export const ErrorMessageComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {/* <X className="text-destructive"/> */}
      <span className="text-destructive">
        Algo salió mal
      </span>
    </div>
  )
}
