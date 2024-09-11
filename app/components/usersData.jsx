export const percentilesData = [
  { percentile: 10, usersCount: 3 },
  { percentile: 20, usersCount: 7 },
  { percentile: 30, usersCount: 10 },
  { percentile: 40, usersCount: 15 },
  { percentile: 50, usersCount: 20 },
  { percentile: 60, usersCount: 18 },
  { percentile: 70, usersCount: 12 },
  { percentile: 80, usersCount: 10 },
  { percentile: 90, usersCount: 5 },
];

export default function updatePercentile(percentileToUpdate) {
  // Find the index of the percentile in the array
  const index = percentilesData.findIndex(
    (data) => data.percentile === percentileToUpdate
  );

  if (index !== -1) {
    percentilesData[index].usersCount += 1;
  } else {
    percentilesData.push({ percentile: percentileToUpdate, usersCount: 1 });
  }

  percentilesData.sort((a, b) => a.percentile - b.percentile);
}
