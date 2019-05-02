export function generateDateString(day,month,year) {
    let m = '';
    if(month === 1)
        m = "Jan"
    else if(month === 2)
        m = "Feb"
    else if(month === 3)
        m = "Mar"
    else if(month === 4)
        m = "Apr"
    else if(month === 5)
        m = "May"   
    else if(month === 6)
        m = "Jun"
    else if(month === 7)
        m = "Jul"
    else if(month === 8)
        m = "Aug" 
    else if(month === 9)
        m = "Sept" 
    else if(month === 10)
        m = "Oct" 
    else if(month === 11)
        m = "Nov"
    else if(month === 12)
        m = "Dec"   

    return m + " " + day + ", " + year;
}
