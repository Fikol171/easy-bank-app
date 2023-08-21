import Header from "../common/Header";
import RequestSection from "../common/RequestSection";
import Section from "../common/Section";
import Main from "../features/Main";

function App() {
  return (
    <>
      <Header />
      <RequestSection />
      <Section title="Why choose Easybank?" body={<Main />} />
    </>
  );
}

export default App;
