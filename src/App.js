import { people } from "./constants";
import RegularList from "./RegularList";
import LargePersonListItem from "./people/LargePersonListItem";
import SmallPersonLIstItem from "./people/SmallPersonLIstItem";

function App() {
  return (
    <>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonLIstItem}
      />
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
    </>
  );
}

export default App;
