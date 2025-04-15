export interface GameContainerProps {
  className?: string;
  children: React.ReactNode;
}

/**
 * Wrapper element for the main content of gameplay routes.
 */
export default function GameContainer({
  className = "",
  children,
}: GameContainerProps) {
  return (
    <main
      className={`mx-auto w-full max-w-7xl grow px-6 lg:px-8 ${className}`.trim()}
    >
      {children}
    </main>
  );
}
