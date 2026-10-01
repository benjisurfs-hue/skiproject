"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

type InfoDialogProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
  returnFocus: HTMLElement | null;
};

// Native modal dialogs make the rest of the document inert, including to assistive technology.
export default function InfoDialog({ title, children, onClose, returnFocus }: InfoDialogProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const backdropPointerDown = useRef(false);
  const titleId = useId();

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    const { body, documentElement } = document;
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const previousBody = {
      position: body.style.position, top: body.style.top, left: body.style.left,
      right: body.style.right, overflow: body.style.overflow, paddingRight: body.style.paddingRight,
    };
    const previousOverflow = documentElement.style.overflow;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
    const paddingRight = parseFloat(getComputedStyle(body).paddingRight);
    Object.assign(body.style, {
      position: "fixed", top: `-${scrollY}px`, left: `-${scrollX}px`, right: "0",
      overflow: "hidden", paddingRight: `${paddingRight + scrollbarWidth}px`,
    });
    documentElement.style.overflow = "hidden";
    element.showModal();
    closeButton.current?.focus({ preventScroll: true });

    return () => {
      element.close();
      Object.assign(body.style, previousBody);
      documentElement.style.overflow = previousOverflow;
      returnFocus?.focus({ preventScroll: true });
      window.scrollTo({ left: scrollX, top: scrollY, behavior: "instant" });
    };
  }, [returnFocus]);

  function outsideDialog(x: number, y: number) {
    const rect = dialog.current?.getBoundingClientRect();
    return !!rect && (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom);
  }

  return (
    <dialog
      ref={dialog}
      className="info-dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onPointerDown={(event) => {
        backdropPointerDown.current = event.target === event.currentTarget && outsideDialog(event.clientX, event.clientY);
      }}
      onClick={(event) => {
        if (backdropPointerDown.current && event.target === event.currentTarget && outsideDialog(event.clientX, event.clientY)) onClose();
        backdropPointerDown.current = false;
      }}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const controls = event.currentTarget.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex="0"]',
        );
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault(); last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault(); first?.focus();
        }
      }}
    >
      <div className="info-dialog-content">
        <header className="info-dialog-header">
          <h2 id={titleId}>{title}</h2>
          <button ref={closeButton} type="button" className="info-dialog-close" aria-label="Close dialog" onClick={onClose}>
            <X size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </header>
        <div className="info-dialog-body">{children}</div>
      </div>
    </dialog>
  );
}
