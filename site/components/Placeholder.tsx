// Visible marker for content the team still needs to confirm. Search the code for "Placeholder" and "TODO".
export default function Placeholder({ children = "PLACEHOLDER" }: { children?: React.ReactNode }) {
  return <span className="placeholder">[{children}]</span>;
}
