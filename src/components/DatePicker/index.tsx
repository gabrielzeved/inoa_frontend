import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { useRef, useState } from "react";
import { useOutsideClick } from "../../hooks/useClickOutside";

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DatePicker = () => {
  const [selectedDayRange, setSelectedDayRange] = useState<any>({
    from: null,
    to: null
  });

  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => {
    setOpen(false);      
  });

  const parseSelectedDate = (date: any) => {
    if(date == null)
      return 'dd/mm/yyyy'
    else
      return `${date.day.toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping:false})}/${date.month.toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping:false})}/${date.year.toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping:false})}`
  }

  return (
    <div onClick={() => {setOpen(true)}} className={`datepicker-wrapper ${open ? 'datepicker-wrapper--open' : ''}`}>
      
      <span className="datepicker-from">{parseSelectedDate(selectedDayRange.from)}</span>
      <span className="datepicker-to">{parseSelectedDate(selectedDayRange.to)}</span>

      <div ref={ref} className="datepicker-helper">
        <Calendar
          value={selectedDayRange}
          onChange={setSelectedDayRange}
          shouldHighlightWeekends
        />
      </div>

    </div>
  );

};

export default DatePicker;