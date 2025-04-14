import {
  useEffect,
  useRef,
  type HTMLAttributes,
  type KeyboardEvent,
} from "react";

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
  useEffect(() => {
    const modalElement = modalRef.current;
    if (!modalElement) return;

    if (isOpen) {
      modalElement.showModal();
    } else {
      modalElement.close();
    }
  }, [isOpen]);

  // Triggers the onClose callback, if defined.
  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
  };

  // If the modal is closed by pressing Esc, trigger the close callback.
  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  return (
    <dialog
      ref={modalRef}
      onKeyDown={handleKeyDown}
      className={`fixed top-1/2 left-1/2 -translate-1/2 rounded-2xl border-2 bg-white p-8 text-gray-900 shadow backdrop:bg-black/50 backdrop:backdrop-blur-xs dark:border-gray-200 dark:bg-gray-900 dark:text-gray-200 ${className}`.trim()}
      {...props}
    >
      <button
        onClick={handleCloseModal}
        className="absolute top-0 right-0 cursor-pointer p-4 text-sm/1 font-bold hover:bg-gray-50 focus:underline dark:hover:bg-gray-800"
        aria-label="Close"
      >
        x
      </button>
      {children}
    </dialog>
  );
}
