import { useEffect, useRef, type HTMLAttributes } from "react";

export interface ModalProps extends HTMLAttributes<HTMLDialogElement> {
  /** Whether the modal is open. */
  isOpen: boolean;
  /** Callback triggered upon closing. */
  onClose?: () => void;
}

/**
 * A modal dialog box.
 */
export default function Modal({
  isOpen = false,
  onClose,
  className = "",
  children,
  ...props
}: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  // Trigger the HTML5 <dialog> open/close behavior whenever isOpen changes.
  useEffect(
    () => (isOpen ? modalRef.current?.showModal() : modalRef.current?.close()),
    [isOpen],
  );

  return (
    <dialog
      ref={modalRef}
      onCancel={onClose}
      className={`fixed top-1/2 left-1/2 -translate-1/2 bg-white p-5.5 pt-0 text-gray-900 shadow backdrop:bg-black/50 backdrop:backdrop-blur-xs dark:bg-gray-900 dark:text-gray-200 ${className}`.trim()}
      {...props}
    >
      <div className="-mr-5.5 flex flex-row-reverse">
        <button
          onClick={onClose}
          className="m-2.5 mb-3.5 cursor-pointer text-xs focus-visible:underline focus-visible:outline-0"
        >
          Close
        </button>
      </div>
      {children}
    </dialog>
  );
}
