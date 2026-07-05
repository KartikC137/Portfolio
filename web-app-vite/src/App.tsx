import NavigationMenu from "./components/left-section/NavigationMenu";
// import ScrollStatus from "./components/left-section/ScrollStatus";
import MiddleSection from "./components/middle-section/MiddleSection";

export default function App() {
  return (
    <>
      <main className="relative overflow-x-scroll">
        <NavigationMenu />
        {/* <ScrollStatus /> */}
        <MiddleSection />
      </main>
    </>
  );
}
