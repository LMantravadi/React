import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An Error Occured.</h1>
        <p>Could not find the page you're looking for...</p>
      </main>
    </>
  );
}
