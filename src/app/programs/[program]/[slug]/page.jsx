// app/programs/[program]/[slug]/page.jsx
import { notFound } from "next/navigation";
import { getCourse, toUrlProgram } from "@/lib/courses";
import CourseDetailTemplate from "@/components/CourseDetails/CourseDetailTemplate";
import { courses } from "@/Data/courseData";

// 1. Tell Next.js all the static pages to generate at build time
export async function generateStaticParams() {
  return courses.map((course) => ({
    program: toUrlProgram(course.program), // 'asset', 'rpl', or 'industrial-attachment'
    slug: course.slug,
  }));
}

// 2. Dynamic SEO title & description (Updated for plain strings)
export async function generateMetadata({ params }) {
  const { program, slug } = await params;
  const course = getCourse(program, slug);

  if (!course) {
    return { title: "Course Not Found" };
  }

  // Create clean short description (removes line breaks)
  const cleanDescription = course.description
    ? course.description.replace(/\n+/g, " ").slice(0, 160)
    : "";

  return {
    title: `${course.title} | Skill Training`,
    description: cleanDescription,
  };
}

// 3. The Page Component
export default async function CourseDetailPage({ params }) {
  const { program, slug } = await params;

  // Simple array search from static data
  const course = getCourse(program, slug);

  // If slug doesn't exist in our array -> trigger Next.js 404 page
  if (!course) {
    notFound();
  }

  // Render the template with the course from the array
  return <CourseDetailTemplate course={course} />;
}