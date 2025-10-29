export function isCurrentMonth(dateString: string): boolean {
    const inputDate = new Date(dateString);
    if (isNaN(inputDate.getTime())) return false;

    const now = new Date();
    return inputDate.getFullYear() === now.getFullYear() &&
           inputDate.getMonth() === now.getMonth();
}