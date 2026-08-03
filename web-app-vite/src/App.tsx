import NavigationMenu from "./components/left-section/NavigationMenu";
import MiddleSection from "./components/middle-section/MiddleSection";

export default function App() {
  return (
    <>
      <main className="relative  overflow-y-hidden">
        <NavigationMenu />
        <MiddleSection />
      </main>
    </>
  );
}
