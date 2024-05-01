export const getVoteAverageValue = vote_average => {
  return vote_average > 0
    ? parseFloat(Math.round(vote_average * 100) / 100).toFixed(1)
    : 0;
};
