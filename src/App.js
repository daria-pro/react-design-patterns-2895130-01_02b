import { products } from "./constants";
import LargeProductListItem from "./products/LargeProductListItem";
import { Modal } from "./Modal";

function App() {
  return (
    <>
      <Modal>
        <LargeProductListItem product={products[0]} />
      </Modal>
    </>
  );
}

export default App;
