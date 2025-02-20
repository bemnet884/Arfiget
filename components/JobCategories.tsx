// Popular Job Categories
export default function JobCategories() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Popular Job Categories</h2>
      <div className="flex flex-wrap justify-center mt-8 gap-6">
        {["Web Development", "Graphic Design", "Marketing", "Writing", "Mobile Apps", "SEO"]
          .map((category, index) => (
            <div key={index} className="p-4 bg-blue-500 text-white rounded-lg shadow-md w-48">
              {category}
            </div>
          ))}
      </div>
    </section>
  )

}