export function generateUniqueId(prefix = 'id'): string {
	const timestamp = Date.now().toString(36); // Время в компактной форме
	const randomArray = new Uint32Array(2); // Массив случайных чисел
	crypto.getRandomValues(randomArray); // Заполнение случайными значениями

	// Объединяем timestamp и случайные числа
	const randomPart = Array.from(randomArray, (num) => num.toString(36)).join(
		'-',
	);

	return `${prefix}-${timestamp}-${randomPart}`;
}
