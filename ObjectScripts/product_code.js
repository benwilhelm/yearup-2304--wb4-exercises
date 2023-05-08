const partCode1 = 'XYZ:1234-large';

const part1 = parsePartCode(partCode1);
console.log('part code:', partCode1);
console.log('part1.supplierCode:', part1.supplierCode);
console.log('part1.productNumber:', part1.productNumber);
console.log('part1.size:', part1.size);

function parsePartCode(partCode) {
  const colonPos = partCode.indexOf(':');
  const dashPos = partCode.indexOf('-');

  const thisSupplierCode = partCode.substring(0, colonPos);
  const productNumber = partCode.substring(colonPos + 1, dashPos);
  const size = partCode.substring(dashPos + 1);

  return {
    supplierCode: thisSupplierCode,
    productNumber: productNumber,
    size: size,
  };
}
