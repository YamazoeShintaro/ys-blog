import { parseISO, format } from 'date-fns';

export default function Date({ dateString }: { dateString: string }) {
    const reDateString = dateString.replace(/\./g, '-');
    const date = parseISO(reDateString);
    return <time className='w-1/2 tent-right' dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
};