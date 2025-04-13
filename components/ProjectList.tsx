interface Project {
  id: number;
  title: string;
  status: string;
  budget: string;
}

export const ProjectList = ({ projects }: { projects: Project[] }) => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
    <ul className="space-y-3">
      {projects.map((project) => (
        <li key={project.id} className="border p-4 rounded-lg flex justify-between items-center">
          <div>
            <h3 className="font-medium text-lg">{project.title}</h3>
            <p className="text-sm text-gray-500">{project.status}</p>
          </div>
          <span className="text-gray-700 font-semibold">{project.budget}</span>
        </li>
      ))}
    </ul>
  </div>
);
