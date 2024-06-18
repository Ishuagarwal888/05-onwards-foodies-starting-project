import { Suspense } from "react";
import Link from "next/link";
import s from "./page.module.css";
import { getMeals } from "@/lib/meals";
import MealGrid from "@/components/meals/meal-grid";

export const metadata = {
  title: "All Meals",
  description: "List of delicious foods.",
};

const Meals = async () => {
  const meals = await getMeals();
  return <MealGrid meals={meals} />;
};

const MealsPage = () => {
  return (
    <>
      <header className={s.header}>
        <h1>
          Delicious meals, created <span className={s.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. it is easy and fun!
        </p>
        <p className={s.cta}>
          <Link href="/meals/share">Share Your Favorite recipe</Link>
        </p>
      </header>
      <main className={s.main}>
        <Suspense fallback={<h2 className={s.loading}>Fetching Meals...</h2>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
