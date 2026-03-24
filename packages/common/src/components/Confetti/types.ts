export type ConfettiPiece = {
  id: number;
  x: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  rotation: number;
};

export type ConfettiProps = {
  /** Whether to show confetti */
  active?: boolean;
  /** Number of confetti pieces */
  count?: number;
  /** Duration in seconds */
  duration?: number;
  /** Custom colors */
  colors?: string[];
};
