import { format } from 'date-fns';

type DateProps = {
  dateString: string;
}

export default function DateComponent({ dateString }: DateProps) {
  const [year, month, day] = dateString.split('.').map(part => parseInt(part, 10));
  const date = new Date(year, month - 1, day);

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date value');
  }

  return (
    <time className="w-1/2 text-right" dateTime={date.toISOString()}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  );
}