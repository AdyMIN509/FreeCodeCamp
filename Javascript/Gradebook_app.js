function getAverage(arrTestScore) {
	return sum(arrTestScore) / arrTestScore.length;
}

function sum(arr) {
	return arr.reduce(
		(total, current) => {
			return total + current;
		}
	)
}

 function getGrade(score) {
	const gradesTab = {
		60:	"F",
		70:	"D",
		80:	"C",
		90:	"B",
		100:"A",
	}
	for(const keys in gradesTab) {
		if (score < keys) {
			return gradesTab[keys];
		}
	}
	return "A+";
 }

 function hasPassingGrade(score){
	return getGrade(score) !== "F";
 }

 function studentMsg(arrOfScores, studentScore) {
	if (hasPassingGrade(studentScore)) {
		return `Class average: ${getAverage(arrOfScores)}. Your grade: ${getGrade(studentScore)}. You passed the course.`;
	} else {
		return `Class average: ${getAverage(arrOfScores)}. Your grade: ${getGrade(studentScore)}. You failed the course.`;
	}
 }