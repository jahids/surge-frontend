import moment from 'moment';

/* eslint-disable @typescript-eslint/no-unused-vars */
export const truncateText = (text: string, maxLength: number) => {
  if (text?.length <= maxLength) {
    return text;
  }
  const truncatedText = text?.substring(0, maxLength);
  // Find the last space character within the truncated text
  const lastSpaceIndex = truncatedText?.lastIndexOf(' ');
  if (lastSpaceIndex !== -1) {
    // Remove the text after the last space and add ellipsis
    return truncatedText?.substring(0, lastSpaceIndex) + '...';
  }
  // If there are no spaces in the truncated text, simply add ellipsis
  return truncatedText + '...';
};

//

export const qtyToNotional = (
  perSharePrice: string | number,
  qty: string | number,
  balance: string | number
) => {
  let notionalValue = Number(perSharePrice) * Number(qty);
  if (notionalValue > Number(balance)) {
    notionalValue = Number(balance) / Number(perSharePrice);
  }
  return notionalValue.toFixed(2);
};
export const notionalToQty = (
  perSharePrice: string | number,
  notionalValue: string | number,
  balance: string | number
) => {
  if (notionalValue > balance) {
    notionalValue = balance;
  }
  const quantity = Number(notionalValue) / Number(perSharePrice);
  return quantity.toFixed(2);
};

export function calculateAccountAge(
  creationDateString: Date | string | number
) {
  const accountCreationDate = moment(creationDateString);

  const today = moment();
  const years = today.diff(accountCreationDate, 'years');
  accountCreationDate.add(years, 'years'); // Increment the creation date by years
  const months = today.diff(accountCreationDate, 'months');
  accountCreationDate.add(months, 'months'); // Increment the creation date by months
  const days = today.diff(accountCreationDate, 'days');
  const hours = today.diff(accountCreationDate,'hours');
  const mins = today.diff(accountCreationDate,'minutes');

  // Build the result based on non-zero components
  let result = '';
  if (years > 0) {
    result += `${years} ${years === 1 ? 'year' : 'years'}`;
  }
  if (months > 0) {
    result += `${result.length > 0 ? ' ' : ''}${months} ${
      months === 1 ? 'month' : 'months'
    }`;
  }
  if (days > 0 && !months && !years) {
    result += `${result.length > 0 ? ' ' : ''}${days} ${
      days === 1 ? 'day' : 'days'
    }`;
  }
  if (!days ) {
    result = `${result.length > 0 ? ' ' : ''}${hours} ${hours === 1 ? 'hour' : 'hours'}`;
  }
  if (!hours) {
    result = `${result.length > 0 ? ' ' : ''}${mins} ${mins === 1 ? 'minute' : 'minutes'}`;
  }
  

  return result;
}

// Example usage:
const accountAge = calculateAccountAge('2021-08-15'); // Replace with the actual creation date
console.log(`Account Age: ${accountAge}`);
