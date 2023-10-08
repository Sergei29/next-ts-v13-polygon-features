/**
 * @description this page is never shown, as it is being redirected at the
 * middleware level:
 * `src/middleware.ts`
 */
const NeverShownPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">This page is never shown</h1>

      <p>Because the middleware will redirect it to the homepage</p>
    </>
  )
}

export default NeverShownPage
