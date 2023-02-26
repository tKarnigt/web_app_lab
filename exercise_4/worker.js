function get_date(){
    const date = new Date();
    postMessage(date);
    setTimeout(get_date, 1000);
}

get_date();
