import format from 'date-fns/format';
import isValid from 'date-fns/isValid';
export function formatDate(date) {
    return isValid(date) ? format(date, 'do MMMM yyyy') : 'N/A';
}
