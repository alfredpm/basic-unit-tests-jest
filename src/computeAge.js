function computeAge(birthday, currentDate){
    const birthYear = birthday.getFullYear();
    const currYear = currentDate.getFullYear();
    let age = currYear-birthYear;

    const birthMonth= birthday.getMonth()
    const currMonth=currentDate.getMonth();
    if (birthMonth>currMonth){
        age+=1;
    } else {
        const birthDay= birthday.getDay()
        const currDay=currentDate.getDay();
        if (birthDay>=currDay){
            age+=1;
        }
    }
    return age;
}