export default function delay(ms: number): void {
  const start = Date.now()

  while (true) {
    if (Date.now() - start > ms) {
      return
    }
  }
}
