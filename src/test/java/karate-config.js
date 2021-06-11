function configure_karate() {
    // Works !
    // var load_config=karate.call('classpath:load-config.js')
    // Crashes ! :(
    var load_config=karate.callSingle('classpath:load-config.js')
    return load_config
}