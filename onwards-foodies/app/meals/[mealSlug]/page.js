export default async function MealPage({params}) {
    const {mealSlug} = await params;
    return (<h1>{mealSlug} Meal Page</h1>)
}