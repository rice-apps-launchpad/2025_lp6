import Link from "next/link";

const styles = {
  page: {
    display: "grid", // Using this to center the items
    alignItems: "center",
    justifyItems: "center",
    gap: "64px",
    minHeight: "100svh",
  },
  main: {
    display: "flex",
    flexDirection: "row",
    gap: "32px",
  }
} as const;

export default function Page() {
  return (
    <div style={styles.page}>
      <div style={styles.main}>
        <PageButton href={"/location"} buttonText={"Location Picker Screen"} />
        <PageButton href={"/weather"} buttonText={"Weather Screen"} />
      </div>
    </div>
  )
}

interface PageButtonProps {
  href: string;
  buttonText: string;
}

function PageButton(props: PageButtonProps) {
  return (
    <Link href={props.href}>
      <button>{props.buttonText}</button>
    </Link>
  )
}