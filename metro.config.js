const blacklist = require('metro-config/src/defaults/blacklist');


module.exports = {
    resolver: {
      blacklistRE: /#current-cloud-backend\/.*/
    },
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
  };