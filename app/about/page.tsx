import { Button } from "../_components/button.component"

export default function Page() {
  /** About Page - Tailwind
   * 	Practice creating Buttons (component)
   * 	Practice importing Buttons
   * 	Practice shadow
   */

  return (
    <>
      <h1>About</h1>
      <p>About page</p>

      <section className=" bg-amber-950 p-4 flex flex-col gap-4">
        <Button name={"Hello World"} />
        <Button name={"Click me"} />
        <Button name={"SUBMIT"} />
        <Button name={"This is a really long name"} />
      </section>

      <p>This element should have some space from above</p>
    </>
  )
}
