import RegularList from "./RegularList";
import NumberedList from "./NumberedList";
import { people, products } from "./constants";
import LargePersonListItem from "./people/LargePersonListItem";
import SmallPersonLIstItem from "./people/SmallPersonLIstItem";
import LargeProductListItem from "./products/LargeProductListItem";

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
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      />
    </>
  );
}

export default App;
