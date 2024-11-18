
const Button = ({children}) => {
  return (
    <button className="flex justify-center items-center bg-[#003366] border-2 border-[#003366]  hover:border-[#FF6600] rounded-lg text-sm text-white py-5 px-10 uppercase hover:bg-transparent hover:text-[#008080] font-semibold">
        {children}
    </button>
  )
}
export default Button