export default function calculateAverage(grades){

    var average = 0;

    grades.forEach(element => {
        average = average + parseInt(element);
    });

    average = average / grades.length;

    average = average

    return average.toFixed(2);
}