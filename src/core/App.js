import Header from "../common/Header";
import RequestSection from "../common/RequestSection";
import Section from "../common/Section";
import Main from "../features/Main";
import SubSection from "../features/SubSection";
import Footer from "../common/Footer";

function App() {
  return (
    <>
      <Header />
      <RequestSection />
      <Section title="Why choose Easybank?" body={<Main />} />
      <Section title="Latest Articles" body={<SubSection />} />
      <Footer />
    </>
  );
}

export default App;
