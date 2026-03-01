import Navbar from "../components/Navbar"
import API from "../api/axios"

const Pricing = () => {
  const upgrade = async () => {
    const { data } = await API.post("/payment/checkout")
    window.location.href = data.url
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-[80vh]">
        <div className="bg-white p-8 rounded-xl shadow-xl text-center">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Upgrade to Pro
          </h2>
          <p className="mb-6">$19.99</p>
          <button onClick={upgrade}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
