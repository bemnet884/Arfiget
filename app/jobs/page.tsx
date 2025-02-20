import Link from "next/link";

const jobs = [
  { id: 1, title: "Web Developer", category: "Tech", description: "Build a website using Next.js" },
  { id: 2, title: "Graphic Designer", category: "Design", description: "Create logos and branding" }
];

export default function JobsPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Available Jobs</h1>
      {jobs.map((job) => (
        <div key={job.id} className="p-4 border rounded mb-2">
          <h2 className="text-xl font-semibold">{job.title}</h2>
          <p>{job.description}</p>
          <Link href={`/jobs/${job.id}`} className="text-blue-600">
            View Details
          </Link>
        </div>
      ))}
    </main>
  );
}
