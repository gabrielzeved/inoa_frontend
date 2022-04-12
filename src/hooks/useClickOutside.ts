import React, { useEffect } from "react";

export function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  callback: any
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        console.log("kdasopkdopaskd");
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
