export default function DangerButton({children, ...props}) {
  return (
    <button {...props} className="bg-red-700 text-white px-4 py-2 rounded-md size-20 hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/50 ">
        {children}
    </button>
  )
}
