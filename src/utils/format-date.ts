export function formatDate(dateToString: string | null | undefined): string {
	if (!dateToString) return 'Неизвестная дата';

	const date = new Date(dateToString);

	if (isNaN(date.getTime())) return 'Некорректная дата';

	return new Intl.DateTimeFormat('ru-RU', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	}).format(date);
}
