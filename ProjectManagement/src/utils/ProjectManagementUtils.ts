
export interface ProjectType {
  id: number ;
  title: string;
  description: string;
  dueDate: string;
  tasks: ProjectTask[]
}

export interface ProjectListType {
  id: number;
  title: string;
}

export default interface ProjectTask {
    id: number;
    name: string;
}

export interface InputProps {
  inputType: string;
  detailType: string;
  value: string
}

export const ProjectData: ProjectType[] = [
    {
      id: 1,
      title: 'Project Aurora',
      description: 'Develop a new web application',
      dueDate: "12/03/2024",
      tasks: [
        { id: 1, name: 'Design UI' },
        { id: 2, name: 'Implement backend' },
        { id: 3, name: 'Test and deploy' }
      ]
    },
    {
      id: 2,
      title: 'Project Nova',
      description: 'Enhance existing mobile app',
      dueDate: "01/13/2025",
      tasks: [
        { id: 4, name: 'Research new features' },
        { id: 5, name: 'Design database schema' },
        { id: 6, name: 'Develop new features' }
      ]
    },
    {
      id: 3,
      title: 'Project Lumina',
      description: 'Create marketing materials',
      dueDate: "02/10/2023",
      tasks: [
        { id: 7, name: 'Design brochure' },
        { id: 8, name: 'Create social media content' },
        { id: 9, name: 'Plan campaign strategy' }
      ]
    }
  ]

  export  const buttonStyle = "bg-gray-600 text-gray-300 hover:bg-gray-200 hover:text-black font-bold text-xl text-right px-2 w-50 h-10 m-4 rounded "
  export  const leftMenubuttonStyle = "text-gray-300 hover:bg-gray-700 hover:text-white text-lg font-bold px-3 m-4 w-30 h-10 rounded "