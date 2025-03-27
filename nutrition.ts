interface IIngredient {
	kcal: number;
	fat: number;
	carbohydrates: number;
	fiber: number;
	protein: number;
	salt: number;
}

function createIngredient(
	kcal: number,
	fat: number,
	carbohydrates: number,
	fiber: number,
	protein: number,
	salt = 0,
): IIngredient {
	return { kcal, fat, carbohydrates, fiber, protein, salt };
}

function sumIngredients(ingredients: [IIngredient, number][]): IIngredient {
	return ingredients.reduce((sum, [ingredient, amount]) => ({
		kcal: sum.kcal + (ingredient.kcal * amount),
		fat: sum.fat + (ingredient.fat * amount),
		carbohydrates: sum.carbohydrates + (ingredient.carbohydrates * amount),
		fiber: sum.fiber + (ingredient.fiber * amount),
		protein: sum.protein + (ingredient.protein * amount),
		salt: sum.salt + (ingredient.salt * amount),
	}), {
		kcal: 0,
		fat: 0,
		carbohydrates: 0,
		fiber: 0,
		protein: 0,
		salt: 0,
	} satisfies IIngredient);
}

function createRecipe(ingredients: [IIngredient, number][], salt = 0) {
	const totalWeight = ingredients.reduce((sum, [_, weight]) => sum + weight, 0);
	const total = sumIngredients(ingredients);
	total.salt += salt;

	const per100g = Object.fromEntries(
		Object.entries(total).map(([key, value]) => [key, value / totalWeight]),
	) as IIngredient;

	return { total, per100g };
}

const flour = createIngredient(348, 1.7, 70, 3.7, 11);
const butter = createIngredient(744, 82, 0.7, 0.7, 0.2);
const brownSugar = createIngredient(398, 0, 99.4, 0, 0);
const honey = createIngredient(330, 0, 82, 0, 0.3);
const eggs = createIngredient(143, 10, 0.7, 0, 13); // 1 medium egg = 60g
const oats = createIngredient(363, 5.7, 60, 10, 13, 0.02);
const raisins = createIngredient(289, 0.4, 65, 8.7, 2);
const cranberries = createIngredient(340, 0.4, 78.4, 4.5, 0.8);

const oatmealRaisinCookies = createRecipe([
	[flour, 2.5],
	[butter, 2.1],
	[brownSugar, 2.3],
	[honey, 0.4],
	[eggs, 1.2],
	[oats, 3],
	[cranberries, 1.5],
	[raisins, 1.5],
], 3);

// eslint-disable-next-line no-console
console.log(oatmealRaisinCookies);
