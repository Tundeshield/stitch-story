import React, { useEffect, useRef, useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from 'date-fns/format';
import { Calendar } from 'react-date-range';
import { CalendarPicker } from '@mui/x-date-pickers';
import { addDays } from 'date-fns';
import { DateRange } from 'react-date-range';

const DatePicker = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Set current date on component load
    document.addEventListener('keydown', hideOnEscape, true);
    document.addEventListener('click', hideOnClickOutside, true);
  }, []);

  const hideOnEscape = (e) => {
    console.log(e.key);
    if (e.key === 'Escape') {
      setOpen(false);
    }
  };
  const hideOnClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className="pb-4">
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Task timeline
      </label>
      <input
        type="text"
        value={`${format(range[0].startDate, 'dd/MM/yyyy')} - ${format(
          range[0].startDate,
          'dd/MM/yyyy',
        )}`}
        onClick={() => setOpen((open) => !open)}
        class="bg-gray-50 cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <div ref={ref}>
        {open && (
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={range}
            direction="horizontal"
          />
        )}
      </div>
    </div>
  );
};

export default DatePicker;
