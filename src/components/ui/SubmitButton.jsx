export default function SubmitButton({children, ...props}) {
  return (
    <button {...props} className="bg-blue-700 text-white px-4 py-2 size-20 rounded-md hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50 ">
        {children}
    </button>
  )
}
