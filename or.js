const status = 5000;
if ( status === 200) {
    console.log ('OK!');
} else if ( status === 400 || status === 500) {
    console.log('Error');
} else {
    console.log('Unknow status');
}