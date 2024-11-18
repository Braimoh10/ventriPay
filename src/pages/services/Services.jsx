import { Link } from "react-router-dom"

const Services = () => {
  return (
    <section className="pt-20 flex flex-col items-center justify-center px-8 " >
        <div className="text-6xl">page not found</div>
         <p className="mt-4 text-lg">Sorry, the product you are looking for does not exist.</p>
         <Link to="/" className="mt-6 text-blue-500 underline">
          Go back to Home
       </Link>
    </section>
  )
}
export default Services