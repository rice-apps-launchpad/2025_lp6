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
    gap: "10px",
  }
} as const;

export default function LocationScreen() {
  return (
    <div style={styles.page}>
      <div style={styles.main}>
      <input type="text" placeholder="Longitude" />
      <input type="text" placeholder="Latitude" />
      </div>
    </div>
  )
}