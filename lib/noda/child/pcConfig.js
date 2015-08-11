

pc.config={
    //An Object containing JSON cf ops,used to compile
// cur  node executable. ("config.gypi" file that
// was produced when running the ./configure script)

    target_defaults:

    { cflags: [],
        default_configuration: 'Release',
        defines: [],
        include_dirs: [],
        libraries: [] },
    variables:
    { host_arch: 'x64',
        node_install_npm: 'true',
        node_prefix: '',
        node_shared_cares: 'false',
        node_shared_http_parser: 'false',
        node_shared_libuv: 'false',
        node_shared_v8: 'false',
        node_shared_zlib: 'false',
        node_use_dtrace: 'false',
        node_use_openssl: 'true',
        node_shared_openssl: 'false',
        strict_aliasing: 'true',
        target_arch: 'x64',
        v8_use_snapshot: 'true' }
}