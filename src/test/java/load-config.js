function load_config() {
    var config = {}
    config.test = Java.type('MyJavaClass').test
    return config
}