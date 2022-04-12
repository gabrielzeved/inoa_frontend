import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "react-modern-calendar-datepicker";
import { useRef, useState } from "react";
import { useOutsideClick } from "../../hooks/useClickOutside";
import { useSearchContext } from "../../contexts/SearchContext";

const DatePicker = () => {
  const {selectedRange, setSelectedRange} = useSearchContext();

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
      
      <span className="datepicker-from">{parseSelectedDate(selectedRange.from)}</span>
      <span className="datepicker-to">{parseSelectedDate(selectedRange.to)}</span>

      <div ref={ref} className="datepicker-helper">
        <Calendar
          value={selectedRange as any}
          onChange={setSelectedRange as any}
          shouldHighlightWeekends
          maximumDate={utils('en').getToday()}
        />
      </div>

    </div>
  );

};

export default DatePicker;