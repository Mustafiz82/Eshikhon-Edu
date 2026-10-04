// lib/courses.js
import { courses } from "@/Data/courseData";

// URL -> Data mapping ('industrial-attachment' in URL -> 'attachment' in data)
export function normalizeProgram(programParam) {
  if (programParam === "industrial-attachment") return "attachment";
  return programParam;
}

// Data -> URL mapping ('attachment' in data -> 'industrial-attachment' in URL)
export function toUrlProgram(dataProgram) {
  if (dataProgram === "attachment") return "industrial-attachment";
  return dataProgram;
}

// Find a single course by slug and program
export function getCourse(programSlug, courseSlug) {
  const targetProgram = normalizeProgram(programSlug);
  return courses.find(
    (c) => c.slug === courseSlug && c.program === targetProgram
  );
}

// Get all courses of a specific program
export function getCoursesByProgram(programSlug) {
  const targetProgram = normalizeProgram(programSlug);
  return courses.filter((c) => c.program === targetProgram);
}