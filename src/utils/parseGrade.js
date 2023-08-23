export const parseGrade = (grade) => {
  switch (grade) {
    case 1:
      return "좋음";
    case 2:
      return "보통";
    case 3:
      return "한때 나쁨";
    case 4:
      return "나쁨";
    case 5:
      return "매우 나쁨";
    default:
      return "알 수 없음";
  }
};
