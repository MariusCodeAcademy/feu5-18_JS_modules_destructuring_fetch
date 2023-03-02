function avg(arr) {
  const vid = getTotal(arr) / arr.length;
  console.log(`Masyvo [${arr}] vidurkis yra ${vid}`);
  return vid;
}

function getTotal(arr) {
  return arr.reduce((total, sk) => total + sk, 0);
}

// exportuoju numatytuoju exportu
export default avg;
