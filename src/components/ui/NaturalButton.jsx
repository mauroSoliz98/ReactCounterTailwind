export default function NaturalButton({children, ...props}) {
  return (
    <button {...props} className="bg-green-700 text-white px-4 py-2 rounded-md size-20 hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/50 ">
    {children}
</button>
  )
}
