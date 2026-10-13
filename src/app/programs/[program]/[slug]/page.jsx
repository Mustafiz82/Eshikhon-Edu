import { notFound } from "next/navigation";
import { getCourse, toUrlProgram } from "@/lib/courses";
import CourseDetailTemplate from "@/components/CourseDetails/CourseDetailTemplate";
import { courses } from "@/Data/courseData";

export async function generateStaticParams() {
  return courses.map((course) => ({
    program: toUrlProgram(course.program),
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { program, slug } = await params;
  const course = getCourse(program, slug);

  if (!course) {
    return {
      title: "Course Not Found | eShikhon",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = course.seo?.title || `${course.title} | eShikhon`;

  const description = course.seo?.description
    ? course.seo.description.replace(/\s+/g, " ").trim().slice(0, 160)
    : course.description
      ? course.description.replace(/\s+/g, " ").trim().slice(0, 160)
      : "";

  const canonical = `https://eshikhon.edu.bd/programs/${program}/${slug}`;

  return {
    title,
    description,
    keywords: course.seo?.keywords || [],

    alternates: {
      canonical,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "eShikhon",
      locale: "bn_BD",
      type: "website",
      images: course.thumbnail?.src
        ? [
            {
              url: course.thumbnail.src,
              alt: course.thumbnail.alt || course.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function CourseDetailPage({ params }) {
  const { program, slug } = await params;
  const course = getCourse(program, slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailTemplate course={course} />;
}