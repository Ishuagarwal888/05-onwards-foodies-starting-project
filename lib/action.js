"use server";
import { redirect } from "next/navigation";
import { setMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isValidElement(text) {
  return !text || text.trim() === "";
}

export const shareMeal = async (prevState, formData) => {
  const meal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  if (
    isValidElement(meal.title) ||
    isValidElement(meal.summary) ||
    isValidElement(meal.instructions) ||
    isValidElement(meal.creator) ||
    isValidElement(meal.creator_email) ||
    !meal.creator_email.include("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    throw new Error("Invalid form data!");
  }
  await setMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
};
