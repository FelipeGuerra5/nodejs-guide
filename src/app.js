if (process.env.NODE_ENV == 'development') {
    console.log('Server on developer mode')
}

if (process.env.NODE_ENV === 'production') {
    console.log('production')
}

if (['production', 'staging'].includes(process.env.NODE_ENV)) {
    console.log('production staging . . .')
}

