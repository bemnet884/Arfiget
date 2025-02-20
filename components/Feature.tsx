import { UserPlus, BookmarkCheck, Backpack, Search } from "lucide-react";

const features = [
  {
    icon: <UserPlus size={40} className="text-blue-600" />,
    title: "Create Account",
    description: "First, you have to create an account here.",
  },
  {
    icon: <Search size={40} className="text-blue-600" />,
    title: "Search Work",
    description: "Search the best freelance work here.",
  },
  {
    icon: <BookmarkCheck size={40} className="text-blue-600" />,
    title: "Save & Apply",
    description: "Apply or save and start your work.",
  },
];

export default function FeaturedSection() {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {features.map((feature, index) => (
          <div key={index} className="p-6 border rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-500 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
