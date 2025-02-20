export default function HowItWorks() {
  return (

    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
      <div className="flex flex-wrap justify-center mt-8 gap-6">
        {[
          { title: "Create an Account", desc: "Sign up as a freelancer or client to get started." },
          { title: "Find Work or Post Jobs", desc: "Freelancers browse jobs, while clients post projects." },
          { title: "Get Hired & Get Paid", desc: "Seamless transactions ensure a smooth workflow." },
        ].map((step, index) => (
          <div key={index} className="p-6 bg-white shadow-md rounded-lg w-64">
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}