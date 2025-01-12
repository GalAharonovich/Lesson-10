import readXlsxFile from "read-excel-file/node"

readXlsxFile("C:/Users/galah/Desktop/new/SVCollege - course/Lesson 10/Get Grades Task/grades.xlsx").then(rows => {
    
        const newGrades = []
        rows.forEach(row => {
            newGrades.push(row[1])

        })
        const removeName = newGrades.shift();
        console.log(newGrades)

        let sum = 0;
        for( let i = 0; i < newGrades.length; i++ ){
            sum += parseInt(newGrades[i]); 
        }
        
        let avg = sum/newGrades.length
        console.log(avg)

})