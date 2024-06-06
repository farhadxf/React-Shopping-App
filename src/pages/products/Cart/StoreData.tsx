import AllData from '../../../components/data/AllData';

// storing allData for  local use

function getProductData(id: string | number) {
  const StoreData = AllData;
  const productData = StoreData.find((product) => product.id === id);

  if (productData === undefined) {
    console.log('product data does not exist for id: ' + id); //log for missing items
    return undefined;
  }

  return productData;
}

export { getProductData };
