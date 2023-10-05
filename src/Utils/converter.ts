import moment from 'moment';

/* eslint-disable @typescript-eslint/no-unused-vars */
export const truncateText = (_text_: string, maxLength: number) => {
  const text = _text_?.trim();
  if (text?.length <= maxLength) {
    return text;
  }
  const truncatedText = text?.substring(0, maxLength);
  // Find the last space character within the truncated text
  // const lastSpaceIndex = truncatedText?.lastIndexOf(' ');
  // if (lastSpaceIndex !== -1) {
  //   // Remove the text after the last space and add ellipsis
  //   return truncatedText?.substring(0, lastSpaceIndex) + '...';
  // }
  // If there are no spaces in the truncated text, simply add ellipsis
  return truncatedText?.trim() + '...';
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
  const hours = today.diff(accountCreationDate, 'hours');
  const mins = today.diff(accountCreationDate, 'minutes');

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
  if (!days) {
    result = `${result.length > 0 ? ' ' : ''}${hours} ${
      hours === 1 ? 'hour' : 'hours'
    }`;
  }
  if (!hours) {
    result = `${result.length > 0 ? ' ' : ''}${mins} ${
      mins === 1 ? 'minute' : 'minutes'
    }`;
  }

  return result;
}

export function getRandomColorCombo() {
  const colorCombos = [
    { textColor: '#2C3E50', background: '#EAEDEA' }, // Navy on Light Gray
    { textColor: '#8E44AD', background: '#F4ECF7' }, // Purple on Lavender
    { textColor: '#D35400', background: '#FAE5D3' }, // Burnt Orange on Peach
    { textColor: '#27AE60', background: '#D5E7DA' }, // Forest Green on Mint
    { textColor: '#C0392B', background: '#FDEDEC' }, // Red on Soft Pink
    { textColor: '#2980B9', background: '#D6EAF8' }, // Blue on Sky Blue
    { textColor: '#7D3C98', background: '#F5EEF8' }, // Plum on Lilac
    { textColor: '#515A5A', background: '#F2FCFA' }, // Charcoal on Off-White
    { textColor: '#1B4F72', background: '#D4E6F1' }, // Deep Blue on Pale Blue
    { textColor: '#7E5109', background: '#FCF3CF' }, // Dark Brown on Buttercream
  ];

  const randomIndex = Math.floor(Math.random() * colorCombos.length);
  return colorCombos[randomIndex];
}

export function round2Places(input: any) {
  const num = parseFloat(input);

  if (isNaN(num)) {
    return 0.0;
  }

  return parseFloat(num.toFixed(2));
}
